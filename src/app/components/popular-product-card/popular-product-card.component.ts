import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

export type PopularProduct = {
  imgURL: string;
  name: string;
  price: string;
};

@Component({
  selector: 'app-popular-product-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './popular-product-card.component.html',
  styleUrl: './popular-product-card.component.css',
})
export class PopularProductCardComponent {
  @Input() popularProduct!: PopularProduct;
}
