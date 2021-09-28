import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/book';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css'],
})
export class BookdetailsComponent implements OnInit {
  Bookdetails: Book;
  myallbooks: Book[] = [];
  constructor(
    private route: ActivatedRoute,
    private _bookService: BookService,
    private _location: Location
  ) {
    this.Bookdetails = this.route.snapshot.data['objBook'];
  }

  ngOnInit(): void {
    this.getmyallbooks();
    //1. route.snapshot.params
    // alert(this.route.snapshot.params.id);
    // alert(this.route.snapshot.params.price);
    // this._bookService
    //   .getBook(this.route.snapshot.params.id)
    //   .subscribe((res) => (this.Bookdetails = res));

    // 2.route.snapshot.paramMap
    // this._bookService
    //   .getBook(parseInt(this.route.snapshot.paramMap.get('id')))
    //   .subscribe((res) => (this.Bookdetails = res));
    // 3.route.params.subscribe
    // this.route.params.subscribe((res) => {
    //   this._bookService
    //     .getBook(res.id)
    //     .subscribe((res) => (this.Bookdetails = res));
    // });
    // 4.route.paramMap.subscribe
    // this.route.paramMap.subscribe((res) => {
    //   this._bookService
    //     .getBook(parseInt(res.get('id')))
    //     .subscribe((res) => (this.Bookdetails = res));
    // });
  }
  getmyallbooks() {
    this._bookService.getBooks().subscribe((res) => (this.myallbooks = res));
  }
  goback() {
    this._location.back();
  }
}
