import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeaderService } from './header.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(
    private http: HttpClient,
    // private header: HeaderService

  ) { }

  baseUrl = 'http://localhost/apis/counties/api/controllers/Controller.php?';

  getCounties() {
    return this.http.get<any>(this.baseUrl + 'action=counties');
  }

  getSubcounties(county: string) {
    return this.http.get<any>(this.baseUrl + 'action=subcounties&county=' + county);
  }

  getWards(subcounty: string) {
    return this.http.get<any>(this.baseUrl + 'action=wards&subcounty=' + subcounty);
  }

}
