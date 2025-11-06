import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ для ngModel
import { Product } from '../shared/models/product';
import { ItemCardComponent } from '../item-card/item-card';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCardComponent], // ✅ FormsModule добавлен
})
export class ItemsListComponent {
  searchTerm = '';  

  products: Product[] = [
      {
        model: 'iPhone 13',
        brand: 'Apple',
        description: 'Новітній iPhone з потужним процесором A15 Bionic.',
        price: 999,
      imageUrl: 'https://content1.rozetka.com.ua/goods/images/big/221026603.jpg',
        memory: 256,
        ram: 4,
        os: 'iOS 15',
        createdAt: new Date(),
        isPopular: true
      },
      {
        model: 'Galaxy S21',
        brand: 'Samsung',
        description: 'Флагман з яскравим AMOLED-дисплеєм та камерою 108MP.',
        price: 899,
        imageUrl: 'https://content.rozetka.com.ua/goods/images/big/371849810.jpg',
        memory: 128,
        ram: 8,
        os: 'Android 12',
        createdAt: new Date(),
        isPopular: false
      },

    {
      model: 'Xiaomi Mi 11',
      brand: 'Xiaomi',
      description: 'Потужний смартфон з гарною автономністю та ціною.',
      price: 499,
      imageUrl: 'https://content1.rozetka.com.ua/goods/images/big/160643974.jpg',
      memory: 128,
      ram: 6,
      os: 'Android 11',
      createdAt: new Date()
    }
  ];

  handleSelect(product: Product): void {
    console.log('Обраний телефон:', product);
  }

  get filteredProducts(): Product[] {
    const term = this.searchTerm.trim().toLowerCase();
    return this.products.filter(item =>
      `${item.brand} ${item.model}`.toLowerCase().includes(term)
    );
  }
}
