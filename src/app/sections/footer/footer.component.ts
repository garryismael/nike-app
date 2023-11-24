import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  footerLinks = [
    {
      title: 'Products',
      links: [
        { name: 'Air Force 1', link: '/' },
        { name: 'Air Max 1', link: '/' },
        { name: 'Air Jordan 1', link: '/' },
        { name: 'Air Force 2', link: '/' },
        { name: 'Nike Waffle Racer', link: '/' },
        { name: 'Nike Cortez', link: '/' },
      ],
    },
    {
      title: 'Help',
      links: [
        { name: 'About us', link: '/' },
        { name: 'FAQs', link: '/' },
        { name: 'How it works', link: '/' },
        { name: 'Privacy policy', link: '/' },
        { name: 'Payment policy', link: '/' },
      ],
    },
    {
      title: 'Get in touch',
      links: [
        { name: 'customer@nike.com', link: 'mailto:customer@nike.com' },
        { name: '+92554862354', link: 'tel:+92554862354' },
      ],
    },
  ];

  socialMedia = [
    { src: '/assets/icons/facebook.svg', alt: 'facebook logo' },
    { src: '/assets/icons/twitter.svg', alt: 'twitter logo' },
    { src: '/assets/icons/instagram.svg', alt: 'instagram logo' },
  ];
}
