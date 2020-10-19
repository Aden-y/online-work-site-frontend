import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-messages',
  templateUrl: './order-messages.component.html',
  styleUrls: ['./order-messages.component.css']
})
export class OrderMessagesComponent implements OnInit {
  id: number;
  selected: any = null;
  messages: any;
  role: string;
  order: string;
  messageForm: FormGroup;
  error: string;
  replyTo: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.messageService.orderMessages(this.id).subscribe(data => {
       this.role = data.role;
       this.messages = data.messages;
       this.order = data.order;
       if( data.role == 'Freelancer') {
         this.replyTo = data.reply_to;
       }
       console.log(data.messages);
       this.messageForm = this.formBuilder.group({
        message: [''],
        files: []
      });
    },
    error => {
      console.log(error);
    }
    );
  }


  onSelect(conversation) {
    this.selected = conversation;
  }

  get files() {
    return this.messageForm.get('files');
  }

  get message() {
    return this.messageForm.get('message');
  }

  triggerFile() {
    document.getElementById('files').click();
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
    if (this.role == 'Freelancer') {
      fd.append('destination', '' + this.replyTo);
    } else {
      fd.append('destination', this.selected.reply_to);
    }

    fd.append('orderid', '' + this.id);

    this.messageService.sendMessage(fd).subscribe(
      (res) => {
        alert(res.message);
        this.messageForm.reset();
      },
      (err) => console.log(err)
    );

  }

  onChooseFiles(event) {
    if (event.target.files.length > 0) {
        this.messageForm.get('files').setValue(event.target.files) ;
    }
  }

  remove() {
    this.files.setValue(null);
  }

}
