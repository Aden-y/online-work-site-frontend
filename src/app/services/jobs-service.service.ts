import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HeaderService } from './header.service';
declare var require: any
const FileSaver = require('file-saver');

@Injectable({
  providedIn: 'root'
})
export class JobsServiceService {
  constructor(
    private http: HttpClient,
    private $http: HttpClientModule,
    private headerService: HeaderService
    ) {}
  postJob(fd: FormData) {
    const url = 'http://127.0.0.1:8000/api/jobs/post';
    return this.http.post<any>(url, fd, {headers: this.headerService.getFullHeader()});
  }

  getJobs() {
    // this.http.get('http://127.0.0.1:8000/api/jobs/index', {headers: this.headers}).subscribe(
    //   data => console.log(data),
    //   error => console.log(error)
    // );
    return this.http.get<any>('http://127.0.0.1:8000/api/jobs/index', {headers: this.headerService.getHeader()});
  }

  findJobs() {
    // this.http.get('http://127.0.0.1:8000/api/jobs/index', {headers: this.headers}).subscribe(
    //   data => console.log(data),
    //   error => console.log(error)
    // );
    return this.http.get<any>('http://127.0.0.1:8000/api/jobs/find', {headers: this.headerService.getHeader()});
  }

  getClientJobs() {
    //  this.http.get('http://127.0.0.1:8000/api/jobs/client_jobs', {headers: this.headers}).subscribe(
    //   data => console.log(data),
    //   error => console.log(error)
    // );
     return this.http.get<any>('http://127.0.0.1:8000/api/jobs/client_jobs', {headers: this.headerService.getHeader()});
  }

  getJob(id: number) {
    //   this.http.get<any>('http://127.0.0.1:8000/api/jobs/details/' + id, {headers: this.headers}).subscribe(
    //   data => console.log(data),
    //   error => console.log(error)
    // );
      return this.http.get<any>('http://127.0.0.1:8000/api/jobs/details/' + id, {headers: this.headerService.getHeader()});
  }

  getJobsBidded() {
    //  this.http.get('http://127.0.0.1:8000/api/jobs/bidded', {headers: this.headers}).subscribe(
    //   data => console.log(data),
    //   error => console.log(error)
    // );
     return this.http.get<any>('http://127.0.0.1:8000/api/jobs/bidded', {headers: this.headerService.getHeader()});
  }

  getJobsInBidding() {
    // this.http.get('http://127.0.0.1:8000/api/jobs/in-bidding', {headers: this.headers}).subscribe(
    //   data => console.log(data),
    //   error => console.log(error)
    // );
    return this.http.get<any>('http://127.0.0.1:8000/api/jobs/in-bidding', {headers: this.headerService.getHeader()});
  }

  getBids(id: number) {
    //   this.http.get<any>('http://127.0.0.1:8000/api/jobs/bids/' + id, {headers: this.headerService.getHeader()}).subscribe(
    //   data => console.log(data),
    //   error => console.log(error)
    // );
    return this.http.get<any>('http://127.0.0.1:8000/api/jobs/bids/' + id, {headers: this.headerService.getHeader()});
  }

  assign(fd: FormData) {
    return this.http.post<any>('http://127.0.0.1:8000/api/jobs/assign', fd, {headers: this.headerService.getHeader()});
  }

  getFreelancerJobsInProgress() {
    return this.http.get<any>('http://127.0.0.1:8000/api/jobs/freelancer-inprogress', {headers: this.headerService.getHeader()});
  }



  getClientJobsInProgress() {
    return this.http.get<any>('http://127.0.0.1:8000/api/jobs/client-inprogress', {headers: this.headerService.getHeader()});
  }


  getFreelancerJobsCancelled() {
    return this.http.get<any>('http://127.0.0.1:8000/api/jobs/freelancer-cancelled', {headers: this.headerService.getHeader()});
  }

  getClientJobsCancelled() {
    return this.http.get<any>('http://127.0.0.1:8000/api/jobs/client-cancelled', {headers: this.headerService.getHeader()});
  }

  getFreelancerJobsCompleted() {
    return this.http.get<any>('http://127.0.0.1:8000/api/jobs/freelancer-conpleted', {headers: this.headerService.getHeader()});
  }

  getClientJobsCompleted() {
    return this.http.get<any>('http://127.0.0.1:8000/api/jobs/client-conpleted', {headers: this.headerService.getHeader()});
  }

  submit(fd: FormData) {
    return this.http.post<any>('http://127.0.0.1:8000/api/jobs/submit', fd, {headers: this.headerService.getHeader()});
  }

  getSubmissions(id: number) {
    return this.http.get<any>('http://127.0.0.1:8000/api/jobs/submissions/' + id, {headers: this.headerService.getHeader()});

  }

  downloadSubmission(id: number, filename: string) {
    this.http.get('http://127.0.0.1:8000/api/jobs/submissions/download/' + id, {responseType : 'arraybuffer', headers: this.headerService.getFileDownloadHeader()}).subscribe(
      res => {
        const blob = new Blob([res], {type: 'application/octet-stream'});
        FileSaver.saveAs(blob, filename);
      },
      error => {
        console.log(error);
      }
    );
  }

  downloadOrderFile(id: number, filename: string) {
    this.http.get('http://127.0.0.1:8000/api/jobs/order-files/download/' + id, {responseType : 'arraybuffer', headers: this.headerService.getFileDownloadHeader()}).subscribe(
      res => {
        const blob = new Blob([res], {type: 'application/octet-stream'});
        FileSaver.saveAs(blob, filename);
      },
      error => {
        console.log(error);
      }
    );
  }

  submitRating(data) {
    return this.http.post<any>('http://127.0.0.1:8000/api/jobs/rating',
      data, {headers: this.headerService.getHeader()});
  }

  // downloadJobFile(id: number) {
  //   return this.http.post('localhost:8000/dashboard/backup', {}, {
  //     responseType:'arraybuffer',headers : this.headerService.getFileDownloadHeader()
  //   })()
  //     .subscribe(res => {
  //
  //
  //     }, err => {
  //       console.log(err);
  //     });
  // }
}
