import { Component, OnInit } from '@angular/core';
import { JobsServiceService } from 'src/app/services/jobs-service.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs = null;
  panelOpenState = false;
  constructor(
    private jobsService: JobsServiceService
  ) { }

  ngOnInit(): void {
    this.jobs = this.jobsService.getJobs();
  }

}
