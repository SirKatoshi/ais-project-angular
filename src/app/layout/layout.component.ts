import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],             // щоб у середині макета працювали дочірні маршрути
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  appTitle = 'AIS Project Angular';
  currentYear = new Date().getFullYear();
}
