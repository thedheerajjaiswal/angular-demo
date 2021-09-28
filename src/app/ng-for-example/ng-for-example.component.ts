import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../persons.service';

@Component({
  selector: 'app-ng-for-example',
  templateUrl: './ng-for-example.component.html',
  styleUrls: ['./ng-for-example.component.css'],
})
export class NgForExampleComponent implements OnInit {
  persons = [
    { id: 101, name: 'Dheeraj' },
    { id: 102, name: 'Chandan' },
    { id: 103, name: 'Vinay' },
    { id: 104, name: 'Ankit' },
    { id: 105, name: 'Ranjan' },
    { id: 106, name: 'Sheshadri' },
  ];

  getalldata() {
    this.persons = [
      { id: 101, name: 'Dheeraj' },
      { id: 102, name: 'Chandan' },
      { id: 103, name: 'Vinay' },
      { id: 104, name: 'Ankit' },
      { id: 105, name: 'Ranjan' },
      { id: 106, name: 'Sheshadri' },
      { id: 107, name: 'Momo' },
    ];
  }
  fntrackby(index: number, persons: any) {
    return persons.id;
  }
  // getpersons: Promise<any>;

  // constructor(private _personsService: PersonsService) {
  //   this.getpersons = _personsService.getallpersons();
  // }

  ngOnInit(): void {}
}
