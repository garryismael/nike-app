import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReviewCardComponent,
  ReviewProp,
} from '../../components/review-card/review-card.component';

@Component({
  selector: 'app-customer-reviews',
  standalone: true,
  imports: [CommonModule, ReviewCardComponent],
  templateUrl: './customer-reviews.component.html',
  styleUrl: './customer-reviews.component.css',
})
export class CustomerReviewsComponent {
  reviews: ReviewProp[] = [
    {
      imgURL: '/assets/images/customer1.jpeg',
      customerName: 'Morich Brown',
      rating: 4.5,
      feedback:
        'The attention to detail and the quality of the product exceeded my expectations. Highly recommended!',
    },
    {
      imgURL: '/assets/images/customer2.svg',
      customerName: 'Lota Mongeskar',
      rating: 4.5,
      feedback:
        "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
    },
  ];
}
