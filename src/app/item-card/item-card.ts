import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { Product } from '../shared/models/product';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.html',
  styleUrls: ['./item-card.scss']
})
export class ItemCard {
  @Input() item!: Product;
}
