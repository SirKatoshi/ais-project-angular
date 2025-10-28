import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemsList } from '../items-list/items-list';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, ItemsList],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  appTitle = 'AIS Project Angular';
  currentYear = new Date().getFullYear();
}
