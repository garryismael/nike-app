import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

export type ReviewProp = {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
};

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.css',
})
export class ReviewCardComponent {
  @Input() review!: ReviewProp;
}
