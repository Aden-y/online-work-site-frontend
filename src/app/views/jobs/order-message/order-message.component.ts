import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenService } from 'src/app/services/token.service';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order-message',
  templateUrl: './order-message.component.html',
  styleUrls: ['./order-message.component.css']
})
export class OrderMessageComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private token: TokenService,
    private http: HttpClient
    ) {
      this.headers = new HttpHeaders({Authorization: 'Bearer ' + this.token.pull()});
     }
  @Input() job: any;
  messageForm: FormGroup;
  headers: HttpHeaders;
  serverResponse: string = null;

  ngOnInit(): void {
    this.messageForm = this.formBuilder.group({
      content: ['', Validators.required]
    });
  }

  get content() {
    return this.messageForm.get('content');
  }

  onSubmit() {
    const fd: FormData = new FormData();
    fd.append('content', this.content.value);
    this.http.post('http://127.0.0.1:8000/api/jobs/message/'+ this.job.id,fd, {headers: this.headers}).
                  subscribe(
                    data => this.handleResponse(),
                    error => console.log(error)
                  );
  }

  handleResponse() {
    this.serverResponse = 'Message sent successfully';
    this.messageForm.reset();
  }



}
