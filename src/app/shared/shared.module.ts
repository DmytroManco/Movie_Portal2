import { NgModule } from '@angular/core';
import { FilterButtonModule } from './button'
import { LikesModule } from './likes';
import { SearchModule } from './search_input';

@NgModule({
  imports: [
    FilterButtonModule,
    LikesModule,
    SearchModule
  ],
  exports: [
    FilterButtonModule,
    LikesModule,
    SearchModule
  ]
})
export class SharedModule { }
