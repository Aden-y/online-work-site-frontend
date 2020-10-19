import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.css']
})
export class MessageDialogComponent implements OnInit {
  messageForm: FormGroup;
  error: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private messageService: MessageService,
    public dialogRef: MatDialogRef<MessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.messageForm = this.formBuilder.group({
      message: [''],
      files: []
    });
  }

  get files() {
    return this.messageForm.get('files');
  }

  get message() {
    return this.messageForm.get('message');
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  triggerFile() {
    document.getElementById('files').click();
  }

  allMessages() {
    if ( this.data.job != null)  {
      this.router.navigateByUrl('/order-messages/' + this.data.job);
    } else {
      this.router.navigateByUrl('/messages');
    }
    this.onCancel();
  }

  onChooseFiles(event) {
    if (event.target.files.length > 0) {
        this.messageForm.get('files').setValue(event.target.files) ;
    }
  }

  sendMessage() {
    const message = this.message.value.trim();
    if (message === '' && this.files.value == null) {
      this.error = 'Please type the message or choose a file';
      return;
    }
    const fd = new FormData();
    fd.append('message', message);
    if ( this.files.value && this.files.value.length > 0) {
      const count = this.files.value.length;
      fd.append('filescount', count);
      for (let i = 0; i < count; i++) {
        fd.append('files' + i, this.files.value[i]);
      }
    } else {
      fd.append('filescount', '0');
    }
    fd.append('destination', this.data.id);
    if ( this.data.job != null) {
      fd.append('orderid', this.data.job);
    }
    this.messageService.sendMessage(fd).subscribe(
      (data) => {alert(data.message);},
      (error) => console.log(error)
    );
    document.getElementById('sendbtn').click();
  }

}
