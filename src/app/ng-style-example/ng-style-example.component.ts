import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-example',
  templateUrl: './ng-style-example.component.html',
  styleUrls: ['./ng-style-example.component.css'],
})
export class NgStyleExampleComponent implements OnInit {
  countryname: string = 'India';
  constructor() {}
  country = [
    { name: 'Dheeraj', country: 'India' },
    { name: 'Salma', country: 'Pakistan' },
    { name: 'Sam', country: 'USA' },
    { name: 'Dalai Lama', country: 'Nepal' },
    { name: 'Jacki chain', country: 'China' },
    { name: 'Kendra', country: 'Australia' },
  ];
  getcolor(country: any) {
    switch (country) {
      case 'India':
        return 'orange';
      case 'Pakistan':
        return 'orange';
      case 'USA':
        return 'Green';

      case 'Nepal':
        return 'red';
      case 'China':
        return 'orangered';
      case 'Australia':
        return 'pink';
    }
    return 0;
  }

  ngOnInit(): void {}
}
