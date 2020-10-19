import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { JobsServiceService } from 'src/app/services/jobs-service.service';
@Component({
  selector: 'app-client-jobs-in-bidding',
  templateUrl: './client-jobs-in-bidding.component.html',
  styleUrls: ['./client-jobs-in-bidding.component.css']
})
export class ClientJobsInBiddingComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'budget', 'bids', 'topic', 'deadline'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private jobService: JobsServiceService,
  ) {}

  ngOnInit() {
    this.jobService.getJobsInBidding().subscribe(data => this.dataSource.data = data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
