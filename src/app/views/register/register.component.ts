import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { forbiddenUsernameValidator, passwordMismatchValidator } from '../../common/custom.validators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocationService } from 'src/app/services/location.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { RegistrationService } from 'src/app/services/registration.service';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    // tslint:disable-next-line: variable-name
    constructor(
      private fb: FormBuilder,
      private http: HttpClient,
      private location: LocationService,
      private registration: RegistrationService,
      private $skills: SkillsService
      ) {
        this.filteredSkills = this.SkillsCtrl.valueChanges.pipe(
          startWith(null),
          map((skill: string | null) => skill ? this._filter(skill) : this.knownSkills.slice()));
      }

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  counties = null;
  subcounties = null;
  wards = null;
  linear = true;
  personalDataForm: FormGroup;
  residenceInformationDataForm: FormGroup;
  educationBackgroundDataForm: FormGroup;
  workExperienceDataForm: FormGroup;
  accountDataForm: FormGroup;
  uploadDetailsForm: FormGroup;
  registerForm: FormGroup;
  form: FormGroup;
  phonePattern = '^(?:254)?(7(?:(?:[1294][0-9])|(?:0[0-8])|(4[0-1]))[0-9]{6})$';
  // tslint:disable-next-line: max-line-length
  emailPattern = '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$';
  passwordPattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$';
  uploadDocs = false;
  uploadResume = false;
  // Create Headers
  headers: HttpHeaders = new HttpHeaders();
  certificate = null;
  resume = null;
  serverError = null;
  serverMessage = null;
  SkillsCtrl: FormControl = new FormControl();

educationlevels: string[] = [
  'None', 'Primary', 'Secondary', 'Certificate', 'Diploma', 'Digree', 'Masters', 'PhD'
];

eperiencelevels: string[] = ['Beginer', 'Intermedeate', 'Expert'];

filteredSkills: Observable<string[]>;
skills: string[] = [];
knownSkills: string[] = [];

@ViewChild('skillsInput') skillsInput: ElementRef<HTMLInputElement>;
@ViewChild('auto') matAutocomplete: MatAutocomplete;

    submitData(): void {
      this.serverError = null;
      this.serverMessage = null;
      const fd: FormData = new FormData();
      fd.append('type', 'Freelancer');
      fd.append('firstname', this.FirstName.value);
      fd.append('middlename', this.personalDataForm.get('middleName').value);
      fd.append('lastname', this.LastName.value);
      fd.append('email', this.Email.value);
      fd.append('username', this.Username.value);
      fd.append('nationalid', this.ID.value);
      fd.append('password', this.Password.value);
      fd.append('phonenumber', this.PhoneNumber.value);
      fd.append('county', this.County.value);
      fd.append('subcounty', this.SubCounty.value);
      fd.append('city', this.City.value);
      fd.append('town', this.Town.value);
      fd.append('postaladdress', this.PostalAddress.value);
      fd.append('postalcode', this.PostalCode.value);
      fd.append('educationlevel', this.educationBackgroundDataForm.get('level').value);
      fd.append('certificate', this.certificate);
      fd.append('experiencelevel', this.ExperienceLevel.value);
      fd.append('resume', this.resume);
      fd.append('skills', JSON.stringify(this.skills));
      this.registration.register(fd).subscribe(
          data => {
            this.serverMessage = data.message;
            this.form.reset();
            document.getElementById('serverMessage').focus();
            this.skills = [];
            this.$skills.getSkills().subscribe($data => this.knownSkills = $data.skills);
          },
          error => {
            switch( error.status) {
              case 400:
                this.serverError = error.error.errors;
              default:
                console.log(error);
                this.serverError = 'Unknown server error';
            }
            document.getElementById('serverError').focus();
          }
        );
    }

    validateAcademiclevel() {
      const level = this.educationBackgroundDataForm.get('level').value;
      // tslint:disable-next-line: triple-equals
      if (level == '' || level == 'None') {
         this.uploadDocs = false;
         this.certificate = null;
      } else {
        this.uploadDocs = true;
      }
    }

    validateExperience() {
      const experience = this.workExperienceDataForm.get('experienceLevel').value;
      // tslint:disable-next-line: triple-equals
      if (experience == '' || experience == 'Beginer') {
        this.uploadResume = false;
        this.resume = null;
      } else {
        this.uploadResume = true;
      }
    }
    onSelectCertificate( event ) {
      this.certificate = event.target.files[0];
    }

    onSelectResume( event ) {
      this.resume = event.target.files[0];
    }

  ngOnInit() {
    this.$skills.getSkills().subscribe(data => {
      this.knownSkills = data.skills;
      console.log(data.skills);
    });
    this.personalDataForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      idNumber: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(this.phonePattern)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]]

    });

    this.residenceInformationDataForm = this.fb.group({
      county: ['', Validators.required],
      subCounty: ['', Validators.required],
      city: ['', Validators.required],
      town: ['', Validators.required],
      postalCode: ['', Validators.required],
      postalAddress: ['', Validators.required]
    });

    this.educationBackgroundDataForm = this.fb.group({
      level: ['', Validators.required],
      docsUpload: ['']
    });

    this.workExperienceDataForm = this.fb.group({
      experienceLevel : ['', Validators.required],
      resume: [''],
      skills : [this.skills]
    });

    this.accountDataForm = this.fb.group ({
    username : ['', [Validators.required, forbiddenUsernameValidator]],
    password: ['', [Validators.required/*, Validators.pattern(this.passwordPattern)*/]],
    confirmPassword: ['', Validators.required]
   }, { validator: passwordMismatchValidator});

    this.form = this.fb.group({
    personalDataForm: this.personalDataForm,
    residenceInformationDataForm: this.residenceInformationDataForm,
    educationBackgroundDataForm: this.educationBackgroundDataForm,
    workExperienceDataForm: this.workExperienceDataForm,
    accountDataForm: this.accountDataForm
  });
    this.location.getCounties().subscribe(data => this.counties = data);
  }

  onCountyChange() {
    const county = this.County.value.trim();
    if (county !== '') {
        this.location.getSubcounties(county).subscribe(data => this.subcounties = data);
    } else {
      this.subcounties = null;
    }
  }
  onSubcountyChange() {
    const subcounty = this.SubCounty.value.trim();
    this.location.getWards(subcounty).subscribe(data => this.wards = data);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.knownSkills.filter(skill => skill.toLowerCase().indexOf(filterValue) === 0);
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

    this.SkillsCtrl.setValue(null);
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
    this.SkillsCtrl.setValue(null);
  }



  get FirstName() {
    return this.personalDataForm.get('firstName');
  }

  get LastName() {
    return this.personalDataForm.get('lastName');
  }

  get ID() {
    return this.personalDataForm.get('idNumber');
  }

  get PhoneNumber() {
    return this.personalDataForm.get('phoneNumber');
  }

  get Email() {
    return this.personalDataForm.get('email');
  }


  get County() {
    return this.residenceInformationDataForm.get('county');
  }


  get SubCounty() {
    return this.residenceInformationDataForm.get('subCounty');
  }

  get City() {
    return this.residenceInformationDataForm.get('city');
  }

  get Town() {
    return this.residenceInformationDataForm.get('town');
  }

  get PostalCode() {
    return this.residenceInformationDataForm.get('postalCode');
  }

  get PostalAddress() {
    return this.residenceInformationDataForm.get('postalAddress');
  }
  get Level() {
    return this.educationBackgroundDataForm.get('level');
  }

  get DocsUpload() {
    return this.educationBackgroundDataForm.get('docsUpload');
  }

  get Username() {
  return this.accountDataForm.get('username');
  }

  get ExperienceLevel() {
  return this.workExperienceDataForm.get('experienceLevel');
  }

  get Password() {
  return this.accountDataForm.get('password');
  }

  get ConfirmPassword() {
  return this.accountDataForm.get('confirmPassword');
  }

}
