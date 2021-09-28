import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Bookweb } from './bookweb';
import { BookwebService } from './bookweb.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { filter, scan, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello Angular Template</h1>
  //   <p>How are you</p>`,
  styleUrls: ['./app.component.css'],
  // styles: ['h1{color:blue}', 'p{color:red}'],
  // preserveWhitespaces: true,
  // encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'demo';
  myBooks: Bookweb[];
  myBooks$: Observable<Bookweb[]>;
  mybook: Bookweb;
  mybook$: Observable<Bookweb>;
  bookname: string;
  relatedbooks: Bookweb[];
  constructor(
    private _router: Router,
    private _bookwebService: BookwebService
  ) {
    // console.log('Hello i am component decorator');
  }

  //filter
  filternumbers() {
    this._bookwebService
      .getNumbers()
      .pipe(filter((n) => n % 2 == 0))
      .subscribe((res) => console.log('Filter Numbers : ' + res));
  }

  //map
  mapnumbers() {
    this._bookwebService
      .getNumbers()
      .map((n) => n + 10)
      .subscribe((res) => console.log('Map Numbers : ' + res));
  }

  //filter and Map
  filterandmap() {
    this._bookwebService
      .getNumbers()
      .pipe(
        filter((n) => n % 2 == 0),
        map((n) => n + 10)
      )
      .subscribe((res) => console.log('Filter and Map :' + res));
  }

  //filter ,Scan and Map
  filterscanandmap() {
    this._bookwebService
      .getNumbers()
      .pipe(
        filter((n) => n % 2 == 0),
        map((n) => n + 10),
        scan((sum, n) => sum + n)
      )
      .subscribe((res) => console.log('Filter, scan and Map :' + res));
  }

  ngOnInit() {
    // this.filternumbers();
    // this.mapnumbers();
    // this.filterandmap();
    // this.filterscanandmap();
    // this._bookwebService.getBooks().subscribe((res) => (this.myBooks = res));
    this._bookwebService.getBooks().subscribe((res) => {
      // debugger;
      this.myBooks = res;
    });
    this.myBooks$ = this._bookwebService.getBooks();
    this.getBookByid();
    this.getBookName();
    this.getreletedBook();
  }
  getBookByid() {
    this._bookwebService.getBookById(101).subscribe((res) => {
      this.mybook = res[0];
    });
    this.mybook$ = this._bookwebService.getBookById(201);
  }
  getBookName() {
    // this._bookwebService.getBookById(301).subscribe((res) => {
    //   this.bookname = res[0].name;
    // });
    this._bookwebService
      .getBookById(401)
      .map((obj) => obj[0].name)
      .subscribe((res) => (this.bookname = res));
  }
  getreletedBook() {
    // let cat: string;
    // this._bookwebService
    //   .getBookById(101)
    //   .map((obj) => obj[0].category)
    //   .subscribe((res) => {
    //     cat = res;
    //     this._bookwebService.getBookByCategory(cat).subscribe((res) => {
    //       this.relatedbooks = res;
    //     });
    //   });

    this._bookwebService
      .getBookById(101)
      .mergeMap((obj) => {
        let catag = obj[0].category;
        return this._bookwebService.getBookByCategory(catag);
      })
      .subscribe((res) => {
        this.relatedbooks = res;
      });
  }
  // sendsydata() {
  //   this._router.navigateByUrl('merchant', {
  //     state: { empcode: 2323, empname: 'Dj' },
  //   });
  // }

  // onclick() {
  //   // this._router.navigate(['aboutus']);
  //   this._router.navigate(['contactus', 800]);
  // }
  // @HostListener('click', ['$event'])
  // onclick() {
  //   alert('hello');
  // }
}
