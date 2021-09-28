import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-decorator',
  templateUrl: './child-decorator.component.html',
  styleUrls: ['./child-decorator.component.css'],
})
export class ChildDecoratorComponent implements OnInit {
  @Input() Pdata: any;

  @Output() childevent = new EventEmitter();
  constructor() {}

  onchange(val: any) {
    this.childevent.emit(val);
  }

  ngOnInit(): void {}
}
