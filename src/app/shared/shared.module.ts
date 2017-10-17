import { NgModule } from '@angular/core';
import { FilterButtonModule } from './button';
import { LikesModule } from './likes';
import { SearchModule } from './search-input';
import { StarsModule } from './stars';
import { LayoutModule } from './layout';

@NgModule({
  imports: [
    FilterButtonModule,
    LikesModule,
    SearchModule,
    StarsModule,
    LayoutModule
  ],
  exports: [
    FilterButtonModule,
    LikesModule,
    SearchModule,
    StarsModule,
    LayoutModule
  ]
})
export class SharedModule { }
