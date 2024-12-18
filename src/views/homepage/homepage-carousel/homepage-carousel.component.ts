import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-homepage-carousel',
  standalone: true,
  imports: [],
  templateUrl: './homepage-carousel.component.html',
  styleUrl: './homepage-carousel.component.scss'
})
export class HomepageCarouselComponent implements OnInit{

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
