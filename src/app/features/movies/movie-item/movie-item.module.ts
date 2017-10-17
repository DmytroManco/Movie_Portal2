import { NgModule } from '@angular/core';
import { MovieItemComponent } from './movie-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../../../shared/index';

@NgModule({
  declarations: [MovieItemComponent],
  imports: [
    BrowserModule,
    SharedModule
  ],
  exports: [MovieItemComponent]
})
export class MovieItemModule { }
