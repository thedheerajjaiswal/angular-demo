import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css'],
})
export class PipesExampleComponent implements OnInit {
  name: string = 'Dheeraj Jaiswal';
  currentDate = new Date();
  str =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi optio modi maiores sequi nescius aliquid officiis, aut impedit est porro assumenda.';
  empdetails = {
    name: 'Dheeraj',
    age: 26,
    country: 'India',
    state: 'Chhattisgarh',
  };
  constructor() {}

  ngOnInit(): void {}
}
