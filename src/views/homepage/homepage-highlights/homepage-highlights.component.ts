import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-homepage-highlights',
  standalone: true,
  imports: [
    MatIcon,
    TranslatePipe
  ],
  templateUrl: './homepage-highlights.component.html',
  styleUrl: './homepage-highlights.component.scss'
})
export class HomepageHighlightsComponent {

}
