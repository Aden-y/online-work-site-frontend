import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-freelancer-rating-dialog',
  templateUrl: './freelancer-rating-dialog.component.html',
  styleUrls: ['./freelancer-rating-dialog.component.css']
})
export class FreelancerRatingDialogComponent implements OnInit {
  form: FormGroup;
  ratings = [1, 2, 3, 4, 5];
  constructor( public dialogRef: MatDialogRef<FreelancerRatingDialogComponent>,
               private fb: FormBuilder,
               @Inject(MAT_DIALOG_DATA) public order: any) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      user_id: [this.order.freelancer.id],
      order_id: [this.order.id],
      rating : ['', Validators.required],
      comment: ['']
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
