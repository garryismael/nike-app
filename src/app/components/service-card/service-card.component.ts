import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

export type ServiceProp = {
  imgURL: string;
  label: string;
  subtext: string;
};

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css'
})
export class ServiceCardComponent {
  @Input() serviceProp!: ServiceProp;
}
