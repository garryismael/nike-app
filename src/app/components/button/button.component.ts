import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'c-button',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() iconUrl?: string;
  @Input() backgroundColor!: string;
  @Input() textColor?: string;
  @Input() borderColor?: string;
  @Input() fullWidth?: boolean;

  getClass() {
    return this.backgroundColor
      ? `${this.backgroundColor}`
      : 'bg-coral-red text-white border-coral-red';
  }
}
