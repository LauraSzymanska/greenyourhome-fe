import {Component, OnInit, signal} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {NgStyle} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {TranslateService} from '@ngx-translate/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbar,
    NgStyle,
    MatIcon,
    MatButtonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  language = signal<string>('');

  ngOnInit(): void {
    this.language.set(this.translate.getBrowserLang() || this.translate.getDefaultLang());
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    this.language.set(language);
  }
}
