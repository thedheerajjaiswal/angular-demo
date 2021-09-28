import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css'],
})
export class FacultyComponent implements OnInit {
  constructor() {}

  getitem() {
    console.log(localStorage.getItem('userId'));
    console.log(sessionStorage.getItem('userId'));
    console.log(JSON.parse(localStorage.getItem('comobj')));
  }
  getAllItem() {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);
      console.log(key, value);
    }
  }
  ngOnInit(): void {}
}
