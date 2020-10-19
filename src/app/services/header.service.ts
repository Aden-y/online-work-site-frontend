import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  constructor(private token: TokenService) { }

  getHeader(): HttpHeaders {
    return new HttpHeaders({
      Authorization: 'Bearer ' + this.token.pull()
    });
  }

  getFullHeader() {
        const headers: HttpHeaders = new HttpHeaders({
          Authorization: 'Bearer ' + this.token.pull()
        });
        headers.append('enctype', 'multipart/form-data');
        headers.append('Content-Type', 'application/json');
        headers.append('X-Requested-With', 'XMLHttpRequest');
        return headers;
  }

  getFileDownloadHeader() {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: 'Bearer ' + this.token.pull()
    });
    headers.append('enctype', 'application/ms-excel');
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With', 'XMLHttpRequest');
    return headers;
  }
}

