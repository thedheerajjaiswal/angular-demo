import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private _router: Router, private _route: ActivatedRoute) {
    this._route.queryParams.subscribe((param) => {
      console.log(param.id);
      console.log(param.name);
    });
  }

  ngOnInit(): void {}
  gotoaboutus() {
    this._router.navigate(['aboutus']);
  }
}
