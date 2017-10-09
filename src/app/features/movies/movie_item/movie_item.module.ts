import { NgModule } from '@angular/core';
import { MovieItemComponent } from './movie_item.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../../../shared/index';

@NgModule({
  declarations: [
    MovieItemComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [
  ],
  exports: [
    MovieItemComponent
  ]
})
export class MovieItemModule { }
