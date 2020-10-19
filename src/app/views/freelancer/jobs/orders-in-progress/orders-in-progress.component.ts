import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from 'src/app/services/token.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { JobsServiceService } from 'src/app/services/jobs-service.service';
import { UploadSubmissionComponent } from 'src/app/views/upload-submission/upload-submission.component';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from 'src/app/views/message-dialog/message-dialog.component';

@Component({
  selector: 'app-orders-in-progress',
  templateUrl: './orders-in-progress.component.html',
  styleUrls: ['./orders-in-progress.component.css']
})
export class OrdersInProgressComponent implements OnInit {

  public account: any;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'price', 'topic', 'deadline', 'client_id'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private http: HttpClient, private token: TokenService,
              public dialog: MatDialog,
              private jobService: JobsServiceService) { }

  ngOnInit() {
    this.jobService.getFreelancerJobsInProgress().subscribe(
      (res) => {this.dataSource.data = res; console.log(res);},
      (err) => console.log(err)
      );
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openSubmissionDialog(job): void {
    const dialogRef = this.dialog.open(UploadSubmissionComponent, {
      width: '500px',
      data: job
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openMessageDialog(jobid, client): void {
    const dialogRef = this.dialog.open(MessageDialogComponent, {
      width: '500px',
      data: {id: client, name: 'Client', job: jobid},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

}
