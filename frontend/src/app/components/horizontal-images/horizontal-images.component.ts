import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface HorizontalImageCard {
  image: string;
  imageAlt?: string;
  title: string;
  subtitle: string;
  linkText?: string;
  linkAction?: () => void;
}

@Component({
  selector: 'app-horizontal-images',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horizontal-images.component.html',
  styleUrl: './horizontal-images.component.scss'
})
export class HorizontalImagesComponent {
  @Input() cards: HorizontalImageCard[] = [];
  @Input() title?: string;
  @Input() description?: string;
}

