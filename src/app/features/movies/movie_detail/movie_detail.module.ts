import { NgModule } from '@angular/core';
import { MovieDetailComponent } from './movie_detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../../../shared';

@NgModule({
  declarations: [
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [
  ],
  exports: [
    MovieDetailComponent
  ]
})
export class MovieDetailItemModule { }
