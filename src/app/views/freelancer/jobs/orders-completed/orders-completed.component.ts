import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from 'src/app/services/token.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { JobsServiceService } from 'src/app/services/jobs-service.service';

@Component({
  selector: 'app-orders-completed',
  templateUrl: './orders-completed.component.html',
  styleUrls: ['./orders-completed.component.css']
})
export class OrdersCompletedComponent implements OnInit {

  public account: any;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'price', 'topic', 'deadline', 'freelancer_id'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private http: HttpClient, private token: TokenService,  private jobService: JobsServiceService) { }

  ngOnInit() {
    this.loadMe();
    this.jobService.getFreelancerJobsCompleted().subscribe(data => this.dataSource.data = data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadMe() {
    const headers1 = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token.pull()
    });
    this.http.get('http://127.0.0.1:8000/api/me', {headers: headers1}).subscribe(
      data => console.log(this.account = data),
      error => console.log(error),
      () => console.log('done')
    );
  }

}
