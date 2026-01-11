import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { InfoCardComponent, InfoCardData } from '../../components/info-card/info-card.component';
import { HorizontalImagesComponent, HorizontalImageCard } from '../../components/horizontal-images/horizontal-images.component';

@Component({
  selector: 'app-challenge',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    SearchBarComponent,
    InfoCardComponent,
    HorizontalImagesComponent
  ],
  templateUrl: './challenge.component.html',
  styleUrl: './challenge.component.scss'
})
export class ChallengeComponent {
  // Datos del hero
  heroCategory = 'Lorem ipsum dolor sit amet.';
  heroTitle = 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit';
  heroDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.';
  heroButtonText = 'Lorem ipsum.';

  // Datos de las tarjetas de información (4 tarjetas sin botón)
  infoCards: InfoCardData[] = [
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
      category: 'Lorem ipsum dolor sit amet.',
      categoryIcon: 'calendar'
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
      category: 'Lorem ipsum dolor sit amet.',
      categoryIcon: 'calendar'
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
      category: 'Lorem ipsum dolor sit amet.',
      categoryIcon: 'calendar'
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
      category: 'Lorem ipsum dolor sit amet.',
      categoryIcon: 'calendar'
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
      category: 'Lorem ipsum dolor sit amet.',
      categoryIcon: 'calendar'
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
      category: 'Lorem ipsum dolor sit amet.',
      categoryIcon: 'calendar'
    }
  ];

  // Datos del componente horizontal-images
  horizontalImagesTitle = 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et';
  horizontalImagesDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.';

  // Datos de las imágenes horizontales
  horizontalCards: HorizontalImageCard[] = [
    {
      image: '',
      title: 'Lorem ipsum',
      subtitle: 'Lorem ipsum dolor sit amet consectetur.',
      linkText: 'Lorem ipsum',
      linkAction: () => console.log('Horizontal card link clicked')
    },
    {
      image: '',
      title: 'Lorem ipsum',
      subtitle: 'Lorem ipsum dolor sit amet consectetur.',
      linkText: 'Lorem ipsum',
      linkAction: () => console.log('Horizontal card link clicked')
    },
    {
      image: '',
      title: 'Lorem ipsum',
      subtitle: 'Lorem ipsum dolor sit amet consectetur.',
      linkText: 'Lorem ipsum',
      linkAction: () => console.log('Horizontal card link clicked')
    },
    {
      image: '',
      title: 'Lorem ipsum',
      subtitle: 'Lorem ipsum dolor sit amet consectetur.',
      linkText: 'Lorem ipsum',
      linkAction: () => console.log('Horizontal card link clicked')
    }
  ];

  onHeroButtonClick() {
    console.log('Hero button clicked');
    // Implement button action here
  }

  onSearch(searchTerm: string) {
    console.log('Search term:', searchTerm);
    // Aquí puedes implementar la lógica de búsqueda
  }
}

