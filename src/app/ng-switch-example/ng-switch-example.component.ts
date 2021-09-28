import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-example',
  templateUrl: './ng-switch-example.component.html',
  styleUrls: ['./ng-switch-example.component.css'],
})
export class NgSwitchExampleComponent implements OnInit {
  name: string = 'Ranjan';

  ids = [1, 32, 33, 56, 75, 87, 3546, 754, 755, 45, 423];
  constructor() {}

  ngOnInit(): void {}
}
