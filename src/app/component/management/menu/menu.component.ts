import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css', '../main/main.component.css']
})
export class MenuComponent {

  tabIndex: number = 1;

  tabSelected(index: number) {
    this.tabIndex = index;
  }
}
