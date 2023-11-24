import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ServiceCardComponent,
  ServiceProp,
} from '../../components/service-card/service-card.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ServiceCardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  services: ServiceProp[] = [
    {
      imgURL: '/assets/icons/truck-fast.svg',
      label: 'Free shipping',
      subtext:
        'Enjoy seamless shopping with our complimentary shipping service.',
    },
    {
      imgURL: '/assets/icons/shield-tick.svg',
      label: 'Secure Payment',
      subtext:
        'Experience worry-free transactions with our secure payment options.',
    },
    {
      imgURL: '/assets/icons/support.svg',
      label: 'Love to help you',
      subtext:
        'Our dedicated team is here to assist you every step of the way.',
    },
  ];
}
