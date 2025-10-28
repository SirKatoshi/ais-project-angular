import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { Product } from '../shared/models/product';
import { ItemCard } from '../item-card/item-card';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, ItemCard],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.scss']
})
export class ItemsList {
  items: Product[] = [
    {
      id: 1,
      title: 'Demo Product 1',
      description: 'Short description for product 1.',
      price: 199,
      imageUrl: 'https://picsum.photos/seed/p1/600/400',
      createdAt: new Date().toISOString()
    },
    {
      id: 2,
      title: 'Demo Product 2',
      description: 'Short description for product 2.',
      price: 349,
      imageUrl: 'https://picsum.photos/seed/p2/600/400',
      createdAt: new Date().toISOString()
    }
  ];
}
