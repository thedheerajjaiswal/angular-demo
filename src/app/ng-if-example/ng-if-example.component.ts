import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp';
import { Enum } from '../enum';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-ng-if-example',
  templateUrl: './ng-if-example.component.html',
  styleUrls: ['./ng-if-example.component.css'],
})
export class NgIfExampleComponent implements OnInit {
  isValid: boolean = true;

  gender: string = 'male';
  isclicked(val: string) {
    this.gender = val;
  }

  // Using Class
  emp1 = new Emp(100, 'dheeraj');
  emp2: Emp;

  //Using Enum
  myEnum = Enum;
  msg: Promise<String>;

  //Using ngIf with else block
  onclick(val: boolean) {
    this.isValid = val;
  }
  constructor(private _messageService: MessageService) {
    this.msg = _messageService.getmessage();
  }

  ngOnInit(): void {}
}
