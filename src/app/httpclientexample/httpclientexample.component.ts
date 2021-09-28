import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookdataService } from '../bookdata.service';
import { Booktest } from '../booktest';

import { BookwebService } from '../bookweb.service';

@Component({
  selector: 'app-httpclientexample',
  templateUrl: './httpclientexample.component.html',
  styleUrls: ['./httpclientexample.component.css'],
})
export class HttpclientexampleComponent implements OnInit {
  AllBook: Booktest[];
  AllBook$: Observable<Booktest[]>;
  searchBooks: Booktest[];
  searchBook: Booktest[];
  allBookResponse: Booktest[];
  allBookResponse$: HttpResponse<Booktest[]>;
  allBookAfterSaved: Booktest[];
  allBookAfterUpdate: Booktest[];
  allBookAfterDelete: Booktest[];
  constructor(private _bookdataService: BookdataService) {}

  //HttpClient.get()
  getallbooks() {
    this._bookdataService.getBooks().subscribe((res) => {
      this.AllBook = res;
    });
    this.AllBook$ = this._bookdataService.getBooks();
  }

  filterBooks(category: string, year: string) {
    this._bookdataService.filterBooks(category, year).subscribe((res) => {
      this.searchBooks = res;
    });
  }
  filterBook(category: string, year: string) {
    this._bookdataService.filterBooks(category, year).subscribe((res) => {
      this.searchBook = res;
    });
  }
  getBookResponse() {
    this._bookdataService.getFullBookResponse().subscribe((res) => {
      // debugger;
      if (res.status == 200) {
        this.allBookResponse$ = res;
      } else {
        console.log('No Data Found');
      }
    });
  }

  invcvalidCall() {
    this._bookdataService.getDataforError().subscribe(
      (res) => {
        console.log(res);
      },
      // (err) => {
      //   alert('404 Error');
      // }
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          //client side error or network issue
          console.log('An Error occured :' + err.error.message);
        } else {
          //  backend return Error
          console.log('Backend Error status Code : ' + err.status);
          console.log('Response body :' + err.statusText);
          console.log(err);
        }
      }
    );
  }

  //HttpClient.post()
  createbook(book: Booktest) {
    this._bookdataService.createBook(book).subscribe((res) => {
      console.log(res);
    });
  }
  saveBook() {
    let newbook: Booktest = {
      id: 501,
      name: 'Node Js',
      category: 'Node Books',
      year: '2012',
    };
    this.createbook(newbook);
    this.getallBookAfterSave();
  }

  getallBookAfterSave() {
    this._bookdataService.getBooks().subscribe((res) => {
      this.allBookAfterSaved = res;
    });
  }

  //HttpClient.put()

  updateBook() {
    let changeBook: Booktest = {
      id: 102,
      name: 'Machine Learning',
      category: 'Machine Learning Books',
      year: '1995',
    };
    this._bookdataService.updateBook(changeBook).subscribe((res) => {
      console.log(res);
    });
    this.getallBookAfterUpdate();
  }

  getallBookAfterUpdate() {
    this._bookdataService.getBooks().subscribe((res) => {
      this.allBookAfterUpdate = res;
    });
  }

  //HttpClient.delete()

  deleteBook() {
    this._bookdataService.deleteBook(101).subscribe((res) => {
      console.log(res);
    });
    this.getallBookAfterDelete();
  }

  getallBookAfterDelete() {
    this._bookdataService.getBooks().subscribe((res) => {
      this.allBookAfterDelete = res;
    });
  }
  ngOnInit(): void {
    this.getallbooks();
    this.filterBooks('Angular Books', '2020');
    this.filterBook('React Books', '2017');
    this.getBookResponse();
    this.invcvalidCall();
    this.getallBookAfterSave();
  }
}
