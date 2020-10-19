import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { AuthControlService } from 'src/app/services/auth-control.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  authError: string = null;
  constructor(
    private _formBuilder: FormBuilder,
    private http: HttpClient,
    private token: TokenService,
    private auth: AuthControlService,
    private router: Router
    ) {}

  get Username() {
    return this.loginForm.get('email');
  }

  get Password() {
    return this.loginForm.get('password');
  }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
        email : ['', Validators.required],
        password : ['', Validators.required]
    });
  }

  handleError(error) {

    if ( error.status === 401) {
      this.authError = 'Incorect email or password';
    } else {
      this.authError = 'Unknown error';
      console.log(error);
    }
  }

  handleResponse(data){
    const access_token = data.access_token;
    const user_type = data.user_type;
    this.token.handle(access_token);
    this.auth.changeAuthStatus(true);
    if ( user_type === 'Client') {
        this.router.navigateByUrl('/client');
      } else {
       this.router.navigateByUrl('/freelancer');
      }
  }

  onSubmit() {
    this.authError = null;
    const formData: FormData = new FormData();
    formData.append('password', this.Password.value);
    formData.append('email', this.Username.value);
    this.http.post('http://127.0.0.1:8000/api/login', formData).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
    );
  }
}
