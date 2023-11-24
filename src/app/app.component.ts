import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CustomerReviewsComponent } from './sections/customer-reviews/customer-reviews.component';
import { FooterComponent } from './sections/footer/footer.component';
import { HeroComponent } from './sections/hero/hero.component';
import { PopularProductsComponent } from './sections/popular-products/popular-products.component';
import { ServicesComponent } from './sections/services/services.component';
import { SpecialOfferComponent } from './sections/special-offer/special-offer.component';
import { SubscribeComponent } from './sections/subscribe/subscribe.component';
import { SuperQualityComponent } from './sections/super-quality/super-quality.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavigationComponent,
    CustomerReviewsComponent,
    FooterComponent,
    HeroComponent,
    PopularProductsComponent,
    ServicesComponent,
    SpecialOfferComponent,
    SubscribeComponent,
    SuperQualityComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'nike-app';
}
