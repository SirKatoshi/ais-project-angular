import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../shared/models/product';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.html',
  styleUrls: ['./item-card.scss']  // ✅ подключение SCSS
})
export class ItemCardComponent {
  @Input() item!: Product;
  @Output() select = new EventEmitter<Product>();
}
