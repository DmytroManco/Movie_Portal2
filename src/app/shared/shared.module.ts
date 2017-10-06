import { NgModule } from '@angular/core';
import { FilterButtonModule } from './button';
import { LikesModule } from './likes';
import { SearchModule } from './search_input';
import { StarsModule } from './stars';

@NgModule({
  imports: [
    FilterButtonModule,
    LikesModule,
    SearchModule,
    StarsModule,
  ],
  exports: [
    FilterButtonModule,
    LikesModule,
    SearchModule,
    StarsModule,

  ]
})
export class SharedModule { }
