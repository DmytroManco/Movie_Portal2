import { NgModule } from '@angular/core';
import { MoviesComponent } from './movies.component';
import { SharedModule } from '../../shared';
import { CoreModule } from '../../core';
import {MoviesService} from "../../core/services/movies.service";
import { MovieItemModule } from './movie_item';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    MoviesComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    MovieItemModule
  ],
  providers: [
    MoviesService
  ],
  exports: [
    MoviesComponent
  ]
})

export class MoviesModule { }
