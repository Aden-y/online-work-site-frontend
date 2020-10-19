import { Component, OnInit } from '@angular/core';
export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'app-freelancer-messages',
  templateUrl: './freelancer-messages.component.html',
  styleUrls: ['./freelancer-messages.component.css']
})
export class FreelancerMessagesComponent implements OnInit {
  opennedConversation: any = null;
  constructor() { }

    // tslint:disable-next-line: member-ordering
    folders: Section[] = [
      {
        name: 'Photos',
        updated: new Date('1/1/16'),
      },
      {
        name: 'Recipes',
        updated: new Date('1/17/16'),
      },
      {
        name: 'Work',
        updated: new Date('1/28/16'),
      }
    ];
    notes: Section[] = [
      {
        name: 'Vacation Itinerary',
        updated: new Date('2/20/16'),
      },
      {
        name: 'Kitchen Remodel',
        updated: new Date('1/18/16'),
      }
    ];

  ngOnInit(): void {
  }



   openConversation() {
      this.opennedConversation = 1;
    }

    closeConversation() {
      this.opennedConversation = null;
    }

}
