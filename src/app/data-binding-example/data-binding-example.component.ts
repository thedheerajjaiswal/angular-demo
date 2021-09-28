import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-example',
  templateUrl: './data-binding-example.component.html',
  styleUrls: ['./data-binding-example.component.css'],
})
export class DataBindingExampleComponent implements OnInit {
  col = 2;
  msg: string = 'Hello Angular';
  isdisabled: boolean = true;
  isbold: boolean = true;
  isitalic: boolean = true;
  iscolored: boolean = true;
  fontsize = 60;
  myName = 'Dheeraj Jaiswal';
  imgpath = '/assets/children.jpg';
  enableDisable() {
    this.isdisabled = !this.isdisabled;
  }
  clickme1() {
    console.log('Click me 1 fired');
  }
  clickme2() {
    console.log('Click me 2 fired');
  }
  keyup() {
    console.log('Key up  is beening fired');
  }
  keydown() {
    console.log('Key Down  is beening fired');
  }
  input() {
    console.log('input is  fired');
  }

  setmsg(val: any) {
    this.msg = val;
    // this.msg = val.value;
  }

  cssClasstoApply = 'boldClass italicClass colorClass';

  AddCssStyle() {
    let cssStyle = {
      'font-weight': this.isbold ? 'bold' : 'normal',
      'font-style': this.isitalic ? 'italic' : 'normal',
      'font-size.px': this.fontsize,
    };
    return cssStyle;
  }

  AddCssClass() {
    let cssClass = {
      boldClass: this.isbold,
      italicClass: this.isitalic,
      colorClass: this.iscolored,
      fontClass: true,
    };
    return cssClass;
  }
  constructor() {}

  ngOnInit(): void {}
}
