import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css'],
})
export class MerchantComponent implements OnInit {
  constructor(private _router: Router, private _location: Location) {
    // console.log(_router.getCurrentNavigation().extras.state);
  }

  ngOnInit(): void {
    // console.log(history.state);
    console.log(this._location.getState());
  }
  canDeactivate() {
    return confirm('Are you sure you want to leave this page of Merchant ..!');
  }
}
