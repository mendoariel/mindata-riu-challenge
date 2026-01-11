import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Input() placeholder: string = 'Buscar...';
  @Input() label: string = '';
  @Output() search = new EventEmitter<string>();

  searchValue: string = '';

  onSearch() {
    this.search.emit(this.searchValue);
  }

  onInputChange() {
    this.search.emit(this.searchValue);
  }
}

