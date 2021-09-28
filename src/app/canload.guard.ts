import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CanloadGuard implements CanLoad {
  isloggedIn: boolean = false;
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.isloggedIn) {
      return true;
    } else {
      alert('Fuck Off and get lost Access Denied..!');
      return false;
    }
  }
}
