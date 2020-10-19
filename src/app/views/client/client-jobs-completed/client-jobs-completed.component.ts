import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from 'src/app/services/token.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { JobsServiceService } from 'src/app/services/jobs-service.service';

@Component({
  selector: 'app-client-jobs-completed',
  templateUrl: './client-jobs-completed.component.html',
  styleUrls: ['./client-jobs-completed.component.css']
})
export class ClientJobsCompletedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
