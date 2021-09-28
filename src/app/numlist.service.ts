import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NumlistService {
  list: number[] = [100];
  constructor() {}

  public addnumber(num: number) {
    this.list.push(num);
  }

  public getlist() {
    return this.list;
  }
}
