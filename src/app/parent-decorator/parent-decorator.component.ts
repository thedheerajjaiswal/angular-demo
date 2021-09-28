import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-decorator',
  templateUrl: './parent-decorator.component.html',
  styleUrls: ['./parent-decorator.component.css'],
})
export class ParentDecoratorComponent implements OnInit {
  constructor() {}
  Cdata: any;

  onchanged(values: any) {
    this.Cdata = values;
  }

  ngOnInit(): void {}
}
