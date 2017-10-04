import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mp-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class LikesComponent {
  @Input() public likes: number = 0;
  @Output() onAddLike: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  addLike(){
    this.onAddLike.emit(this.likes);
  }
}
