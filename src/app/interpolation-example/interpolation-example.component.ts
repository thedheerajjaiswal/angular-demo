import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-example',
  templateUrl: './interpolation-example.component.html',
  styleUrls: ['./interpolation-example.component.css'],
})
export class InterpolationExampleComponent implements OnInit {
  city = 'Ambikapur';
  num1 = 700;
  num2 = 300;

  Changecity() {
    this.city = 'New Delhi';
  }

  empDetails = {
    name: 'Dheeraj',
    age: 26,
    city: 'Ambikapur',
    state: 'Chhattisgarh',
  };

  // empDetails: any;

  constructor() {}

  ngOnInit(): void {}
}
