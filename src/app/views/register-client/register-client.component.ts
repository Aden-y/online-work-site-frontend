import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { forbiddenUsernameValidator, passwordMismatchValidator } from '../../common/custom.validators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocationService } from 'src/app/services/location.service';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {

    // tslint:disable-next-line: variable-name
    constructor(
      private fb: FormBuilder, private http: HttpClient,
      private location: LocationService,
      private registration: RegistrationService
      ) { }

  linear = true;
  counties = null;
  subcounties = null;
  wards = null;
  personalDataForm: FormGroup;
  residenceInformationDataForm: FormGroup;
  accountDataForm: FormGroup;
  uploadDetailsForm: FormGroup;
  registerForm: FormGroup;
  form: FormGroup;
  phonePattern = '^(?:254)?(7(?:(?:[1294][0-9])|(?:0[0-8])|(4[0-1]))[0-9]{6})$';
  // tslint:disable-next-line: max-line-length
  emailPattern = '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$';
  passwordPattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$';

  // Create Headers
  serverError = null;
  serverMessage = null;



    submitData(): void {
      this.serverError = null;
      this.serverMessage = null;
      const fd: FormData = new FormData();
      fd.append('type', 'Client');
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
      this.registration.register(fd, true).subscribe(
          data => {
            this.serverMessage = data.message;
            this.form.reset();
          },
          error => {
            switch(error.status) {
              case 400:
                this.serverError = error.error.errors;
              default:
               console.log(error);
            }
          }
        );

    }

  ngOnInit() {
    this.location.getCounties().subscribe(data => this.counties = data);
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


    this.accountDataForm = this.fb.group ({
    username : ['', [Validators.required, forbiddenUsernameValidator]],
    password: ['', [Validators.required/*, Validators.pattern(this.passwordPattern)*/]],
    confirmPassword: ['', Validators.required]
   }, { validator: passwordMismatchValidator});

    this.form = this.fb.group({
    personalDataForm: this.personalDataForm,
    residenceInformationDataForm: this.residenceInformationDataForm,
    accountDataForm: this.accountDataForm
  });
  }

  onCountyChange() {
    const county = this.County.value.trim();
    if (county !== '') {
        this.location.getSubcounties(county).subscribe(data => this.subcounties = data);
    } else {
      this.subcounties = null;
      this.wards = null;
    }
  }
  onSubcountyChange() {
    const subcounty = this.SubCounty.value.trim();
    this.location.getWards(subcounty).subscribe(data => this.wards = data);
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
  get Username() {
    return this.accountDataForm.get('username');
  }

  get Password() {
    return this.accountDataForm.get('password');
  }

  get ConfirmPassword() {
    return this.accountDataForm.get('confirmPassword');
  }

}
