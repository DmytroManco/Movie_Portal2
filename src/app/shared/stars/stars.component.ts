import { Component, ViewEncapsulation, Output, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mp-stars',
  templateUrl: 'stars.component.html',
  styleUrls: ['stars.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class StarsComponent {
  @Input() active: boolean;
  @Input() position: number;
  @Output() rate = new EventEmitter();

  handleRate() {
    this.rate.emit(this.position);
  }

}
