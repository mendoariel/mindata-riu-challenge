import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @Input() image?: string;
  @Input() imageAlt?: string;
  @Input() category?: string;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() buttonText?: string;
  @Input() buttonAction?: () => void;
}

