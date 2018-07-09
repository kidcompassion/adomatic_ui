import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-table',
  templateUrl: './ad-table.component.html',
  styleUrls: ['./ad-table.component.css']
})
export class AdTableComponent implements OnInit {


     ads = [
          {
              'id': 1,
              'adTitle': 'My Ad',
              'adStatus': 'published',
              'startDate': 'May 22, 2018',
              'endDate': 'June 22, 2018',
          },
          {
              'id': 2,
              'adTitle': 'My Ad Two',
              'adStatus': 'published',
              'startDate': 'May 22, 2018',
              'endDate': 'June 22, 2018',
          },
          {
              'id': 3,
              'adTitle': 'My Ad three',
              'adStatus': 'published',
              'startDate': 'May 22, 2018',
              'endDate': 'June 22, 2018',
          }

      ];

  constructor() { }

  ngOnInit() {
  }

  viewAd() {
      console.log('clicked');
  }

}
