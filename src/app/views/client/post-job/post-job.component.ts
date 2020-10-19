import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { SkillsService } from 'src/app/services/skills.service';
import { JobsServiceService } from 'src/app/services/jobs-service.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  skillsCtrl = new FormControl();
  filteredSkills: Observable<string[]>;
  skills: string[] = [];
  knownSkills: string[] = [];

  levels = [
    {level: 3, name: 'Expert'},
    {level: 2, name: 'Intermediate'},
    {level: 1, name: 'Beginner'},
  ];
  ratings = [1, 2, 3, 4, 5];
  attachedFiles = [];
  formError: string = null;
  serverMessage: string = null;
  linear = true;
  mainForm: FormGroup;
  jobDetailsForm: FormGroup;
  jobInstructionsForm: FormGroup;
  jobSkillsForm: FormGroup;
  jobBudgetForm: FormGroup;

 @ViewChild('skillsInput') skillsInput: ElementRef<HTMLInputElement>;
 @ViewChild('auto') matAutocomplete: MatAutocomplete;
  constructor(
    private formBuilder: FormBuilder,
    public skillsService: SkillsService,
    private router: Router,
    private token: TokenService,
    private jobService: JobsServiceService
    ) {
          this.filteredSkills = this.skillsCtrl.valueChanges.pipe(
          startWith(null),
          map((skill: string | null) => skill ? this._filter(skill) : this.knownSkills.slice()));
    }

  ngOnInit( ) {
      this.skillsService.getSkills().subscribe(data => this.knownSkills = data.skills);
      this.jobDetailsForm = this.formBuilder.group({
        title : ['', Validators.required],
        description: ['', Validators.required],
      });
      this.jobInstructionsForm = this.formBuilder.group({
        biddinginstructions: ['', Validators.required],
        experiencelevel: ['', Validators.required],
        rating: ['', Validators.required],
        deadline: ['', Validators.required]
      });

      this.jobSkillsForm = this.formBuilder.group({
        skills : [this.skills]
      });

      this.jobBudgetForm = this.formBuilder.group({
        budget: ['', Validators.required]
      });

      this.mainForm = this.formBuilder.group({
        jobDetailsForm: this.jobBudgetForm,
        jobInstructionsForm: this.jobInstructionsForm,
        jobSkillsForm: this.jobSkillsForm,
        jobBudgetForm: this.jobBudgetForm
      });


  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.skills.push(value.trim());
    }

    if (input) {
      input.value = '';
    }

    this.skillsCtrl.setValue(null);
  }

  remove(skill: string): void {
    const index = this.skills.indexOf(skill);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.skills.push(event.option.viewValue);
    this.skillsInput.nativeElement.value = '';
    this.skillsCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.knownSkills.filter(skill => skill.toLowerCase().indexOf(filterValue) === 0);
  }

  get budget() {
    return this.jobBudgetForm.get('budget');
  }

  get deadline() {
    return this.jobInstructionsForm.get('deadline');
  }
  get rating() {
    return this.jobInstructionsForm.get('rating');
  }

  get experiencelevel() {
    return this.jobInstructionsForm.get('experiencelevel');
  }

  get biddinginstructions() {
    return this.jobInstructionsForm.get('biddinginstructions');
  }

  get files() {
    return this.jobDetailsForm.get('files');
  }

  get description() {
    return this.jobDetailsForm.get('description');
  }

  get title() {
    return this.jobDetailsForm.get('title');
  }

  onFilesChange(event) {
    this.attachedFiles = event.target.files;
  }

  onSubmit() {
    this.formError = null;
    this.serverMessage = null;
    const fd: FormData = new FormData();
    fd.append('title', this.title.value);
    fd.append('description', this.description.value);
    fd.append('biddinginstructions', this.biddinginstructions.value);
    fd.append('experiencelevel', this.experiencelevel.value);
    fd.append('rating', this.rating.value);
    fd.append('deadline', this.deadline.value);
    fd.append('budget', this.budget.value);
    fd.append('skills', JSON.stringify(this.skills));
    fd.append('filescount', '' + this.attachedFiles.length);

    for (let i = 0; i < this.attachedFiles.length; i++) {
      fd.append('files' + i, this.attachedFiles[i]);
    }
    this.jobService.postJob(fd).subscribe(
    data => this.handleResponse(data),
    error => this.handleError(error)
  );

  }

  handleResponse(data) {
    this.serverMessage = data.message;
    this.mainForm.reset();
    this.skills = [];
    this.skillsService.getSkills().subscribe( $data => this.knownSkills = $data.skills);
    this.attachedFiles = [];
  }


  handleError(error) {
    console.log(error);
    if ( error.status === 401) {
        this.token.delete();
        this.router.navigateByUrl('/login');

    } else if (error.status === 403) {
      this.token.delete();
      this.router.navigateByUrl('/login');
    } else {
      this.formError = 'Unknown error in the server';
    }
  }
}
