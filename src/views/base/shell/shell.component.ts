import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {NavbarComponent} from '../navbar/navbar.component';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from '../footer/footer.component';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    HeaderComponent,
    NavbarComponent,
    RouterOutlet,
    FooterComponent,
  ],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss'
})
export class ShellComponent implements OnInit {

  isMobile: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
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

}
