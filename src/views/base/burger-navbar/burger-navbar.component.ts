import { Component } from '@angular/core';
import {MatNavList} from '@angular/material/list';
import {MatDialogRef} from '@angular/material/dialog';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {MatToolbar} from '@angular/material/toolbar';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-burger-navbar',
  standalone: true,
  imports: [
    MatNavList,
    MatIcon,
    MatIconButton,
    MatToolbar,
    TranslatePipe
  ],
  templateUrl: './burger-navbar.component.html',
  styleUrl: './burger-navbar.component.scss'
})
export class BurgerNavbarComponent {
  constructor(private dialogRef: MatDialogRef<BurgerNavbarComponent>) {}

  closeMenu() {
    this.dialogRef.close();
  }

  onSaleClick() {
    console.log("działa")
  }
}
