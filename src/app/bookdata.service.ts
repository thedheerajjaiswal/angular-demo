import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booktest } from './booktest';

@Injectable({
  providedIn: 'root',
})
export class BookdataService {
  private bookURL = '/api/books';

  constructor(private _http: HttpClient) {}
  //HttpClient.get() Examples
  getBooks(): Observable<Booktest[]> {
    return this._http.get<Booktest[]>(this.bookURL, { responseType: 'json' });
  }

  filterBooks(cat: string, yr: string) {
    let httpHeaders = new HttpHeaders().set('Accept', 'application/json');
    return this._http.get<Booktest[]>(
      this.bookURL + '?category=' + cat + '&year=' + yr,
      {
        headers: httpHeaders,
      }
    );
  }
  filterBook(cat: string, yr: string) {
    let httpHeaders = new HttpHeaders().set('Accept', 'application/json');

    let httpParams = new HttpParams().set('category', cat).set('year', yr);
    return this._http.get<Booktest[]>(this.bookURL, {
      headers: httpHeaders,
      params: httpParams,
    });
  }

  getFullBookResponse(): Observable<HttpResponse<Booktest[]>> {
    return this._http.get<Booktest[]>(this.bookURL, { observe: 'response' });
  }

  private myurl = '/api/invalid';
  getDataforError() {
    return this._http.get(this.myurl);
  }

  //HttpClent.post() Examples
  createBook(book: Booktest): Observable<Booktest> {
    let httpHeaders = new HttpHeaders().set('Content-type', 'application/json');
    return this._http.post<Booktest>(this.bookURL, book, {
      headers: httpHeaders,
    });
  }

  //HttpClent.put() Examples

  updateBook(book: any): Observable<any> {
    let httpHeaders = new HttpHeaders().set('Content-type', 'application/json');
    return this._http.put(this.bookURL + '/' + book.id, book, {
      headers: httpHeaders,
    });
  }

  //HttpClent.delete() Examples

  deleteBook(bookid: number): Observable<any> {
    let httpHeaders = new HttpHeaders().set('Content-type', 'application/json');
    return this._http.delete(this.bookURL + '/' + bookid, {
      headers: httpHeaders,
    });
  }
}
