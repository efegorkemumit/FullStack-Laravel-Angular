import { Component } from '@angular/core';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent {
  products = [
    {
      ID: 1,
      PRODUCT_NAME: 'Shoes One',
      PRICE: '$400',
      SIZE: 'XL',
      CATEGORY: 'Computer',
      STOCK: 50
    },
    {
      ID: 2,
      PRODUCT_NAME: 'Dress One Two',
      PRICE: '$400',
      SIZE: 'XL',
      CATEGORY: 'Dress More',
      STOCK: 50
    },
    {
      ID: 3,
      PRODUCT_NAME: 'Computer One Two',
      PRICE: '$600',
      SIZE: 'XL',
      CATEGORY: 'Techno',
      STOCK: 50
    },
    {
      ID: 4,
      PRODUCT_NAME: 'Watch One',
      PRICE: '$400',
      SIZE: 'L',
      CATEGORY: 'Watch Access',
      STOCK: 50
    },
    {
      ID: 5,
      PRODUCT_NAME: 'Shop By',
      PRICE: '$500',
      SIZE: 'S',
      CATEGORY: 'Shop',
      STOCK: 50
    },
    {
      ID: 6,
      PRODUCT_NAME: 'Glasses',
      PRICE: '$500',
      SIZE: 'GM',
      CATEGORY: 'Woman',
      STOCK: 50
    },
    {
      ID: 7,
      PRODUCT_NAME: 'Microphone',
      PRICE: '$500',
      SIZE: 'No',
      CATEGORY: 'Computer Acs',
      STOCK: 50
    },
    {
      ID: 8,
      PRODUCT_NAME: 'Phone 10XL',
      PRICE: '$500',
      SIZE: 'XL',
      CATEGORY: 'Apple',
      STOCK: 50
    },
    {
      ID: 11,
      PRODUCT_NAME: 'Sams Not 12',
      PRICE: '$500',
      SIZE: 'XL12',
      CATEGORY: 'Charn',
      STOCK: 50
    }
    // Daha fazla ürünü buraya ekleyebilirsiniz
  ];
}
