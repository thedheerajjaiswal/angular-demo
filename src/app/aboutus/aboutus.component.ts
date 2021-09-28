import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
})
export class AboutusComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}
  // gotodashboard() {
  //   // this._router.navigate(['dashboard']);

  //   let navigationExtras: NavigationExtras = {
  //     queryParams: {
  //       id: 9090,
  //       name: 'Dheeraj',
  //     },
  //   };
  //   this._router.navigate(['dashboard'], navigationExtras);
  // }
  gotodashboard() {
    this._router.navigate(['dashboard'], {
      queryParams: {
        id: 9090,
        name: 'Dheeraj',
      },
    });
  }
}
