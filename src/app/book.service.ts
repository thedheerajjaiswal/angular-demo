import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private Books: Book[] = [
    {
      id: 101,
      name: 'Angular',
      price: 8000,
      description: 'A complete book for angular',
    },
    {
      id: 201,
      name: 'Reactjs',
      price: 9000,
      description: 'A complete book for Reactjs',
    },
    {
      id: 301,
      name: 'Nodejs',
      price: 6000,
      description: 'A complete book for Nodejs',
    },
    {
      id: 401,
      name: 'Fultter',
      price: 11000,
      description: 'A complete book for Fultter',
    },
    {
      id: 501,
      name: 'MongoDB',
      price: 1000,
      description: 'A complete book for MongoDB',
    },
  ];
  constructor() {}

  BookList = Observable.of(this.Books);
  BookToDisplay = this.Books.concat({
    id: 601,
    name: 'Java',
    price: 3000,
    description: 'A complete book for Java',
  });
  getBooks(): Observable<Book[]> {
    // return Observable.of(this.Books);
    return Observable.of(this.BookToDisplay);
  }
  getBook(id: number): Observable<Book> {
    // return this.getBooks().map((books) => books.find((book) => book.id == id));
    return this.BookList.map((books) => books.find((book) => book.id == id));
  }
}
