import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemsListComponent } from '../items-list/items-list';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, ItemsListComponent],
  templateUrl: './layout.component.html'
})
export class LayoutComponent {
  currentYear = new Date().getFullYear();
}
