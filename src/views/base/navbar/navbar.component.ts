import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {NgStyle} from '@angular/common';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbar,
    NgStyle,
    MatIcon,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
