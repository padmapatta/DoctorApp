import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Router } from 'express';
import { Language } from 'src/app/models/language';
import { LanguagesService } from 'src/app/services/languages.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  links = [
    { title: 'Home', url: 'home' },
    { title: 'Doctors', url: 'doctors' },
    { title: 'Treatments', url: 'treatments' },
    { title: 'Contact Us', url: 'contactus' },
  ];

  languages: Language[] = [];
  currentLang: Language | undefined = { name: 'Choose Language', code: '' };

  isMenuCollapsed = true;

  constructor(
    private translate: TranslateService,
    public route: ActivatedRoute,
    private languageService: LanguagesService
  ) {
    this.languageService.getLanguages().subscribe((res) => {
      this.languages = res;
    });
    translate.onLangChange.subscribe(
      (val) => {
        this.currentLang = this.languages.find((lang) => lang.code == val.lang);
      },
      (err) => {}
    );
  }
  
  ngOnInit(): void {
    console.log(this.route);
  }

  onLanguageChange(lang: Language) {
    console.log(lang);
    this.translate.use(lang.code);
  }
}
