import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'mp-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class LikesComponent {
  @Input() public likes: number = 0;
}
