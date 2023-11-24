import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  navLinks = [
    { href: '/home/', label: 'Home' },
    { href: '/about-us/', label: 'About Us' },
    { href: '/products/', label: 'Products' },
    { href: '/contact-us/', label: 'Contact Us' },
  ];
}
