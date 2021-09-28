import { Component, OnInit } from '@angular/core';
import { NumlistService } from '../numlist.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component implements OnInit {
  constructor(private _numlistService: NumlistService) {}
  list1: number[] = [];
  ngOnInit(): void {
    this.list1 = this._numlistService.getlist();
  }
  addnumber(val: any) {
    this._numlistService.addnumber(val);
    this.list1 = this._numlistService.getlist();
  }
}
