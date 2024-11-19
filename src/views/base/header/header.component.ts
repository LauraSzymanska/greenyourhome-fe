import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {NgStyle} from '@angular/common';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbar,
    NgStyle,
    MatIcon,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}