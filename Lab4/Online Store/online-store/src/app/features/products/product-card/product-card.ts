import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css'],
})
export class ProductCardComponent {
  @Input() product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    rating: 0,
    image: '',
    images: [],
    link: ''
  };

  selectedImage = '';

  ngOnInit(): void {
    this.selectedImage = this.product.image;
  }

  setImage(url: string): void {
    this.selectedImage = url;
  }

  get fullStars(): number {
    return Math.floor(this.product.rating);
  }

  get hasHalfStar(): boolean {
    return this.product.rating - Math.floor(this.product.rating) >= 0.5;
  }

  get emptyStars(): number {
    const used = this.fullStars + (this.hasHalfStar ? 1 : 0);
    return Math.max(0, 5 - used);
  }

  formatPriceKzt(value: number): string {
    return new Intl.NumberFormat('ru-KZ').format(value) + ' ₸';
  }

  whatsappShareUrl(): string {
    const text = `Check out this product: ${this.product.link}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  }

  telegramShareUrl(): string {
    return `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
  }
}
