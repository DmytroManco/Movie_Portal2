import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mp-search-filter',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent {
  @Output() public onSearch: EventEmitter<any> = new EventEmitter<any>();

  public search(filter) {
    this.onSearch.emit(filter);
  }
}
