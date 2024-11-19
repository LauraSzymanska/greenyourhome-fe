import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatMenu, MatMenuTrigger} from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbar,
    MatMenuTrigger,
    MatMenu,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  activeMenu: string | null = null;

  showMenu(menuType: string) {
    this.activeMenu = menuType;
  }

  hideMenu(menuType: string) {
    if(this.activeMenu === menuType) {
      this.activeMenu = null;
    }
  }
}
