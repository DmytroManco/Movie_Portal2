import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mp-filter-btn',
  templateUrl: 'filter-button.component.html',
  styleUrls: ['filter-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FilterButtonComponent {
  @Output() public onclickHandler: EventEmitter<Event> = new EventEmitter<Event>();

  private clickHandler($event: Event) {
    this.onclickHandler.emit($event);
  }
}
