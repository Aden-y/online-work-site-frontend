import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsServiceService } from 'src/app/services/jobs-service.service';

@Component({
  selector: 'app-job-detalis',
  templateUrl: './job-detalis.component.html',
  styleUrls: ['./job-detalis.component.css']
})
export class JobDetalisComponent implements OnInit {
  id: number;
  job: any;
  constructor(private route: ActivatedRoute, private jobsService: JobsServiceService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.jobsService.getJob(this.id).subscribe(data => {
        this.job = data;
        console.log(data);
    }
      );
  }

  download(id: number, filename: string ) {
    this.jobsService.downloadOrderFile(id, filename );
  }
}
