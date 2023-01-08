import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Router } from 'express';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  links = [
    {title: 'Home', url: 'home'},
    {title: 'Doctors', url: 'doctors'},
    {title: 'Treatments', url: 'treatments'},
    {title: 'Contact Us', url: 'contactus'}
  ];

  languages =  [
    {name:'English', value: 'en'},
    {name:'Arabic', value: 'au'},
    {name:'France', value: 'fr'},
    {name:'Dutch', value: 'd'}
  ] ;

  isMenuCollapsed = true ;

  constructor(private translate: TranslateService, public route: ActivatedRoute) { 
    
    
  }
  ngOnInit(): void {
    console.log(this.route);
  }

  
  onLanguageChange(e: any) {
    console.log(e.target.value);
    this.translate.use(e.target.value);
  }
}
