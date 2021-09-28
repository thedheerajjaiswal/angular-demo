import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  // inputs: ['Pdata'],
  outputs: ['childEvent'],
})
export class ChildComponent implements OnInit {
  // Pdata: any;

  childEvent = new EventEmitter();

  onChange(val: any) {
    // console.log(val);
    this.childEvent.emit(val);
  }
  constructor() {}

  ngOnInit(): void {}
}
