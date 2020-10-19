import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { JobsServiceService } from 'src/app/services/jobs-service.service';
import {MatDialog} from '@angular/material';
import {FreelancerRatingDialogComponent} from '../../freelancer-rating-dialog/freelancer-rating-dialog.component';
@Component({
  selector: 'app-client-jobs-in-process',
  templateUrl: './client-jobs-in-process.component.html',
  styleUrls: ['./client-jobs-in-process.component.css']
})
export class ClientJobsInProcessComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'topic', 'price',  'freelancer', 'submissions', 'deadline'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(
    private jobService: JobsServiceService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.jobService.getClientJobsInProgress().subscribe(
      (res) => {this.dataSource.data = res; console.log(res); },
      (err) => {console.log(err); }
      );
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  complete(order: any) {
    const dialogRef = this.dialog.open(FreelancerRatingDialogComponent, {
      width: '450px',
      data: order
    });

    dialogRef.afterClosed().subscribe(result => {
      if ( result === undefined) {
        return;
      }
      const fd = new FormData();
      fd.append('user_id', result.user_id);
      fd.append('order_id', result.order_id);
      fd.append('rating', result.rating);
      fd.append('comment', result.comment);
      this.jobService.submitRating(fd).subscribe(
        res => {
          alert('Job marked as complete. Thank you for trusting online worksite (:!');
        },
        error => {
          console.log(error);
        }
      );
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
