import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularProductCardComponent } from '../../components/popular-product-card/popular-product-card.component';

@Component({
  selector: 'app-popular-products',
  standalone: true,
  imports: [CommonModule, PopularProductCardComponent],
  templateUrl: './popular-products.component.html',
  styleUrl: './popular-products.component.css'
})
export class PopularProductsComponent {
  products = [
    {
      imgURL: '/assets/images/shoe4.svg',
      name: 'Nike Air Jordan-01',
      price: '$200.20',
    },
    {
      imgURL: '/assets/images/shoe5.svg',
      name: 'Nike Air Jordan-10',
      price: '$210.20',
    },
    {
      imgURL: '/assets/images/shoe6.svg',
      name: 'Nike Air Jordan-100',
      price: '$220.20',
    },
    {
      imgURL: '/assets/images/shoe7.svg',
      name: 'Nike Air Jordan-001',
      price: '$230.20',
    },
  ];
}
