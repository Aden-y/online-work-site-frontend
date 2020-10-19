import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsServiceService } from 'src/app/services/jobs-service.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from '../../message-dialog/message-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})
export class BidsComponent implements OnInit {
  id: number;
  job: any;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['freelancer', 'amount',  'freelancer_id', 'created_at',];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private route: ActivatedRoute,
              private jobsService: JobsServiceService,
              public dialog: MatDialog,
              private snackbar: MatSnackBar,
    ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.jobsService.getJob(this.id).subscribe(data => this.job = data );
    this.jobsService.getBids(this.id).subscribe(data => this.dataSource.data = data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openMessageDialog(freelancer): void {
    const dialogRef = this.dialog.open(MessageDialogComponent, {
      width: '500px',
      data: {id: freelancer.id, name: freelancer.firstname, job: this.id},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  assign(freelancerId) {
    const fd = new FormData();
    fd.append('freelancer', freelancerId);
    fd.append('orderid', this.job.id);
    this.jobsService.assign(fd).subscribe(
      (res) => {this.showSnackBar(res.message, 'Done') } ,
      (err) => {console.log(err); this.showSnackBar(err.error, 'Close'); }
    );
  }

  showSnackBar(message: string, action: string) {
    this.snackbar.open(message, action, { duration: 4000});
  }



}
