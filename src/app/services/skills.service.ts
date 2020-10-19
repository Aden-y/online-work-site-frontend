import { Injectable } from '@angular/core';
import { HeaderService } from './header.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(
    private headers: HeaderService,
    private http: HttpClient
  ) { }
  private url = 'http://localhost:8000/api/skills/all';
  getSkills() {
    return this.http.get<any>(this.url, {headers : this.headers.getHeader()});
  }
}
