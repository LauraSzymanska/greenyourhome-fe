import { Component } from '@angular/core';
import {HomepageCarouselComponent} from '../homepage-carousel/homepage-carousel.component';
import {ProductCardComponent} from '../../product/product-card/product-card.component';
import {ProductRowListComponent} from '../../product/product-row-list/product-row-list.component';
import {HomepageHighlightsComponent} from '../homepage-highlights/homepage-highlights.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    HomepageCarouselComponent,
    ProductCardComponent,
    ProductRowListComponent,
    HomepageHighlightsComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
