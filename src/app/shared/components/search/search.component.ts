import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Input() placeholder: string;
  @Input() icon: string;

  @Output() search = new EventEmitter<string>();

  onSearch(searchTerm) {
    this.search.emit(searchTerm);
  }
}
