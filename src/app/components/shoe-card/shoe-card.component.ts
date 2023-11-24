import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

export type ShoeProp = {
  thumbnail: string;
  bigShoe: string;
};

@Component({
  selector: 'app-shoe-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './shoe-card.component.html',
  styleUrl: './shoe-card.component.css',
})
export class ShoeCardComponent {
  @Input() imgUrl!: ShoeProp;
  @Input() bigShoeImg!: string;
  @Output() changeBigShoeImage = new EventEmitter<ShoeProp>();

  handleClick() {
    if (this.bigShoeImg !== this.imgUrl.bigShoe) {
      this.changeBigShoeImage.emit(this.imgUrl);
    }
  }
}
