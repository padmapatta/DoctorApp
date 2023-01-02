import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private translate: TranslateService) {}
  onLanguageChange(e:any) {
    console.log(e.target.value);
    this.translate.use(e.target.value);
  }
}
