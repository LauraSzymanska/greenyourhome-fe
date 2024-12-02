import {Component, OnInit, signal} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {NgStyle} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {TranslateService} from '@ngx-translate/core';
import {MatButtonModule} from '@angular/material/button';
import {BurgerNavbarComponent} from '../burger-navbar/burger-navbar.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbar,
    NgStyle,
    MatIcon,
    MatButtonModule,
    MatDialogModule,
    BurgerNavbarComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  constructor(private translate: TranslateService, private dialog: MatDialog, private breakpointObserver: BreakpointObserver) {}

  language = signal<string>('');

  isMobile: boolean = false;

  ngOnInit(): void {
    this.language.set(this.translate.getBrowserLang() || this.translate.getDefaultLang());

    this.breakpointObserver
      .observe([
        Breakpoints.Handset,
        Breakpoints.TabletPortrait,
        Breakpoints.WebPortrait,
      ])
      .subscribe(result => {
        this.isMobile = result.matches;
      });
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    this.language.set(language);
  }

  openBurgerMenu(): void {
    this.dialog.open(BurgerNavbarComponent, {
      height: '100%',
      width: '100%',
      maxWidth: 'none',
    })
  }
}
