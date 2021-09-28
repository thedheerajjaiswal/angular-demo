import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Resolve,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from './book';
import { BookService } from './book.service';

@Injectable({
  providedIn: 'root',
})
export class ResolveGuard implements Resolve<Book> {
  constructor(private _bookService: BookService, private router: Router) {}
  resolve(router: ActivatedRouteSnapshot): Observable<Book> {
    let id = router.params.id;
    return this._bookService.getBook(id).map((book) => {
      if (book) {
        return book;
      } else {
        alert('No Data Found');
        this.router.navigate(['book']);
        return null;
      }
    });
  }
}
