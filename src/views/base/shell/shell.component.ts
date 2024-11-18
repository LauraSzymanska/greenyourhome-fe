import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {NavbarComponent} from '../navbar/navbar.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    HeaderComponent,
    NavbarComponent,
  ],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss'
})
export class ShellComponent {

}
