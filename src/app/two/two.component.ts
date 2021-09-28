import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Display } from '../display';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
  viewProviders: [Display],
  // encapsulation: ViewEncapsulation.None,
})
export class TwoComponent implements OnInit {
  constructor(private display1: Display) {
    display1.show();
  }

  ngOnInit(): void {}
}
