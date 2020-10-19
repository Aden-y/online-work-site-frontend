import { Injectable } from '@angular/core';
import { HeaderService } from './header.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(
    private headers: HeaderService,
    private http: HttpClient
    ) { }

    register(fd: FormData, client = false) {
      const url = client ? 'http://localhost:8000/api/register-client' : 'http://localhost:8000/api/register';
      return this.http.post<any>(url, fd, {headers : this.headers.getHeader()});
    }
}
