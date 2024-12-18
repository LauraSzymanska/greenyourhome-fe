import { Component } from '@angular/core';
import {HomepageCarouselComponent} from '../homepage-carousel/homepage-carousel.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    HomepageCarouselComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
