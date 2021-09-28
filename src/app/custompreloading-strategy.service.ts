import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustompreloadingStrategyService implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload'] == true) {
      if (route.data['delay']) {
        return timer(5000).mergeMap(() => load());
      }
      return load();
    } else {
      return of(null);
    }
  }
}
