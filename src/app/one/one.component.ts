import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Display } from '../display';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
  viewProviders: [Display],
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class OneComponent implements OnInit {
  constructor(private display: Display) {
    display.show();
  }

  ngOnInit(): void {}
}
