import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenService } from 'src/app/services/token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-order-bidding',
  templateUrl: './order-bidding.component.html',
  styleUrls: ['./order-bidding.component.css']
})
export class OrderBiddingComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private token: TokenService,
    private http: HttpClient
  ) { this.headers = new HttpHeaders({Authorization: 'Bearer ' + this.token.pull()}); }

  @Input() job: any;
  biddingForm: FormGroup;
  headers: HttpHeaders;
  serverResponse: string = null;
  serverError: string = null;

  ngOnInit(): void {
    this.biddingForm = this.formBuilder.group({
      amount: ['', Validators.required],
      description: ['']
    });
  }

  get amount() {
    return this.biddingForm.get('amount');
  }

  get description() {
    return this.biddingForm.get('description');
  }

  onSubmit() {
    const fd: FormData = new FormData();
    fd.append('amount', this.amount.value );
    fd.append('description', this.description.value);
    this.http.post('http://127.0.0.1:8000/api/jobs/bid/' + this.job.id, fd, {headers: this.headers})
            .subscribe(
              data => this.handleResponse(),
              error => console.log(error)
            );
  }

  handleResponse() {
    this.serverResponse = 'Bid placed successfully';
    this.biddingForm.reset();
  }

}
