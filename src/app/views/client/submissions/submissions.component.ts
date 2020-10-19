import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsServiceService } from 'src/app/services/jobs-service.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent implements OnInit {
  id: number;
  job: any;
  submissions: any[];
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['path', 'created_at', 'id'];

  constructor( private activetedRoute: ActivatedRoute,
               private jobsService: JobsServiceService) { }

  ngOnInit(): void {
    this.id = +this.activetedRoute.snapshot.paramMap.get('id');
    this.job = this.jobsService.getJob(this.id);
    this.jobsService.getSubmissions(this.id).subscribe(
      (res) => {
        console.log(res);
        this.submissions = res;
        this.dataSource.data = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  download(id: number, filename: string) {
    this.jobsService.downloadSubmission(id, filename);
  }
}
