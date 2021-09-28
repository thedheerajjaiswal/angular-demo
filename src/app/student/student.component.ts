import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  constructor() {
    localStorage.setItem('userId', '001');
    sessionStorage.setItem('userId', '999');
  }
  setitem() {
    localStorage.setItem('Empid', 'Dhiru');
    sessionStorage.setItem('Empid', 'momo');

    localStorage.setItem('comobj', JSON.stringify(this.company));
  }
  removeitem() {
    localStorage.removeItem('Empid');
    sessionStorage.removeItem('Empid');
  }

  company = {
    name: 'Dheeraj',
    city: 'Ambikapur',
    state: 'CG',
  };

  deleteAll() {
    localStorage.clear();
  }
  ngOnInit(): void {}
}
