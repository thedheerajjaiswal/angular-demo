import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { Bookweb } from './bookweb';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root',
})
export class BookwebService {
  private apiurl = '/api/';

  // bookDeatils: Bookweb[] = [
  //   { id: 101, name: 'Angular', category: 'Angular Books' },
  //   { id: 201, name: 'React', category: 'React Books' },
  //   { id: 301, name: 'Flutter', category: 'Flutter Books' },
  //   { id: 401, name: 'PHP', category: 'PHP Books' },
  //   { id: 501, name: 'Node Js', category: 'Node Books' },
  //   { id: 601, name: 'Express Js', category: 'Express Books' },
  // ];

  constructor(private _httpclient: HttpClient) {}
  getBooks(): Observable<Bookweb[]> {
    return this._httpclient.get<Bookweb[]>(this.apiurl + 'books');
  }
  getBookById(bookId: number): Observable<Bookweb> {
    return this._httpclient.get<Bookweb>(
      this.apiurl + 'books' + '?id=' + bookId
    );
  }
  // getObservablebook(): Observable<Bookweb[]> {
  //   return Observable.of(this.bookDeatils);
  // }
  getBookByCategory(cat: string): Observable<Bookweb[]> {
    return this._httpclient.get<Bookweb[]>(
      this.apiurl + 'books' + '?category=' + cat
    );
  }

  getNumbers(): Observable<number> {
    return of(1, 2, 3, 4, 5, 6, 7, 8);
  }
}
