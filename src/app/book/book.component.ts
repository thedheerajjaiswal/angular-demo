import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  constructor(private _bookService: BookService) {}
  myallbooks: Book[] = [];
  ngOnInit(): void {
    this.getmyallbooks();
  }
  getmyallbooks() {
    this._bookService.getBooks().subscribe((res) => (this.myallbooks = res));
  }
}
