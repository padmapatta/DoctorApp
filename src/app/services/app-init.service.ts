import { Injectable } from '@angular/core';
import { firstValueFrom, from } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';

declare var window: any;


@Injectable({
  providedIn: 'root'
})
export class AppInitService {
  init() {
    return from(
      fetch('assets/app-config.json').then(function(response) {
        return response.json();
      })
    ).pipe(
      map((config) => {
      window.config = config;
      return ;
    })).toPromise();
  }

  constructor() { }
}
