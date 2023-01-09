import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguagesService } from './services/languages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(translate: TranslateService, private languageService: LanguagesService) {
    this.languageService.getLanguages().subscribe( res => {
      let langs:string[] = [] ;
      res.forEach( lang => {
        langs.push(lang.code);
      });
      translate.addLangs(langs);
      translate.setDefaultLang(this.languageService.getDefaultLanguage());
      translate.use(this.languageService.getDefaultLanguage());
    });
  }
}
