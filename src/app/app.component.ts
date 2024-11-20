import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Green your home';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['pl', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use(this.translate.getBrowserLang() || "en");
  }
}
