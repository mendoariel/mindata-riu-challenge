import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface InfoCardData {
  image?: string;
  imageAlt?: string;
  category?: string;
  categoryIcon?: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonAction?: () => void;
}

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss'
})
export class InfoCardComponent {
  @Input() data!: InfoCardData;
}

