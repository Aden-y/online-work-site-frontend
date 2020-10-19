import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private iss = {
    login : 'http://127.0.0.1:8000/api/auth/login',
    logout : 'http://127.0.0.1:8000/api/auth/logout'
  };
  constructor() { }

  handle(token) {
    this.save(token);
  }

  save(token) {
    localStorage.setItem('token', token);
  }

  pull() {
    return localStorage.getItem('token');
  }

  validate() {
    const token = this.pull();
    if (token) {
      // const payload = this.payload(token);
      // if (payload) {
      //   // return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      //   return true;
      // }
      return true;

    }
    return false;
  }

  delete() {
    localStorage.removeItem('token');
  }

  payload(token) {
    const payload = token.split(',')[1];
    //return this.decode(payload);
    return payload;

  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  isLoggedIn() {
    return this.validate();
  }

}
