import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular_App';

  constructor(private readonly translate: TranslateService) {
    translate.setDefaultLang('fr');
    translate.use("fr");
  }
}

