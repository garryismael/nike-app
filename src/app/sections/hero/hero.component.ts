import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import {
  ShoeProp,
  ShoeCardComponent,
} from '../../components/shoe-card/shoe-card.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonComponent, NgOptimizedImage, ShoeCardComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  bigShoeImg = "/assets/images/big-shoe1.png";

  statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
  ];

  shoes: ShoeProp[] = [
    {
      thumbnail: '/assets/images/thumbnail-shoe1.svg',
      bigShoe: '/assets/images/big-shoe1.png',
    },
    {
      thumbnail: '/assets/images/thumbnail-shoe2.svg',
      bigShoe: '/assets/images/big-shoe2.png',
    },
    {
      thumbnail: '/assets/images/thumbnail-shoe3.svg',
      bigShoe: '/assets/images/big-shoe3.png',
    },
  ];

  changeImg(shoe: ShoeProp) {
    this.bigShoeImg = shoe.bigShoe;
  }
}
