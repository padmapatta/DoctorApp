import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Language } from '../models/language';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  constructor(private httpClient:HttpClient) { }

  getLanguages(): Observable<Language[]> {
    return of([
      {name:'English', code: 'en'},
      {name:'France', code: 'fr'},
      {name:'Dutch', code: 'nl'}
    ]) ;
    // return this.httpClient.get<Language[]>('');
  }

  getDefaultLanguage() {
    return 'en' ;
  }
}
