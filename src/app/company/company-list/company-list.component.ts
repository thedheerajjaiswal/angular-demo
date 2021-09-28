import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
})
export class CompanyListComponent implements OnInit {
  companys: any;
  constructor() {}

  ngOnInit(): void {
    this.companys = [
      { name: 'HCL', country: 'India' },
      { name: 'TCS', country: 'India' },
      { name: 'Sahosoft', country: 'India' },
      { name: 'infosis', country: 'India' },
    ];
  }
}
