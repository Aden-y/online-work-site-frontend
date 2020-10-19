import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { HeaderService } from './header.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient, private headerService: HeaderService) { }

  sendMessage(fd: FormData) {
    return this.http.post<any>('http://127.0.0.1:8000/api/messages/send', fd, {headers: this.headerService.getFullHeader()});
  }

  orderMessages(id: number) {
    return this.http.get<any>('http://127.0.0.1:8000/api/messages/order-messages/' + id, {headers: this.headerService.getFullHeader()});
  }


}

