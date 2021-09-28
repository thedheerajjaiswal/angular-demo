import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersonsService {
  persons = [
    { id: 101, name: 'Dheeraj' },
    { id: 102, name: 'Chandan' },
    { id: 103, name: 'Vinay' },
    { id: 104, name: 'Ankit' },
    { id: 105, name: 'Ranjan' },
    { id: 106, name: 'Sheshadri' },
  ];

  constructor() {}
  getallpersons(): Promise<any> {
    return new Promise((resolve) => resolve(this.persons));
  }
}
