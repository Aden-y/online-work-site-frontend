import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from 'src/app/services/token.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { JobsServiceService } from 'src/app/services/jobs-service.service';
@Component({
  selector: 'app-client-jobs-cancelled',
  templateUrl: './client-jobs-cancelled.component.html',
  styleUrls: ['./client-jobs-cancelled.component.css']
})
export class ClientJobsCancelledComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
