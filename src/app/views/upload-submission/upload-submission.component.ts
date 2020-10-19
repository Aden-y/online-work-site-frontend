import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { JobsServiceService } from 'src/app/services/jobs-service.service';

@Component({
  selector: 'app-upload-submission',
  templateUrl: './upload-submission.component.html',
  styleUrls: ['./upload-submission.component.css']
})
export class UploadSubmissionComponent implements OnInit {
  files: any = null;
  constructor(
    public dialogRef: MatDialogRef<UploadSubmissionComponent>,
    private jobsService: JobsServiceService,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onCancel(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

  triger() {
    document.getElementById('inputFile').click();
  }

  onChooseFile(event) {
    const filesCount = event.target.files.length;
    if (filesCount > 0) {
      this.files = event.target.files;
    }
  }

  onSubmit() {
    if (!this.files) {
      alert('You did not select any files');
      return;
    }
    const fd = new FormData();
    fd.append('orderid', this.data.id);
    fd.append('filescount', this.files.length);
    if (this.files.length > 0) {
      for (let i = 0; i < this.files.length; i++) {
        fd.append('files' + i, this.files[i]);
      }
    }
    this.jobsService.submit(fd).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

}
