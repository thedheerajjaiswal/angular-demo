import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent implements OnInit {
  persons: any;
  constructor() {}

  ngOnInit(): void {
    this.persons = [
      { name: 'Dheeraj', country: 'India' },
      { name: 'Ranjan', country: 'India' },
      { name: 'chandan', country: 'India' },
      { name: 'ajeet', country: 'India' },
    ];
  }
}
