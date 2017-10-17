import { NgModule } from '@angular/core';
import { MovieDetailComponent } from './movie-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../../../shared/index';

@NgModule({
  declarations: [MovieDetailComponent],
  imports: [BrowserModule, SharedModule],
  exports: [MovieDetailComponent]
})
export class MovieDetailItemModule { }
