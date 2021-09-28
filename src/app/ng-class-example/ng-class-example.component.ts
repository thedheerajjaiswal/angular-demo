import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-example',
  templateUrl: './ng-class-example.component.html',
  styleUrls: ['./ng-class-example.component.css']
})
export class NgClassExampleComponent implements OnInit {

   persons = [
    { id: 101, name: 'Dheeraj' },
    { id: 102, name: 'Chandan' },
    { id: 103, name: 'Vinay' },
    { id: 104, name: 'Ankit' },
    { id: 105, name: 'Ranjan' },
    { id: 106, name: 'Sheshadri' },
   ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
