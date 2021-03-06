import { NgModule } from '@angular/core';
import { MoviesComponent } from './movies.component';
import { SharedModule } from '../../shared/index';
import { CoreModule } from '../../core/index';
import { MoviesService } from '../../core/services/movies.service';
import { MovieItemModule } from './movie-item';
import { BrowserModule } from '@angular/platform-browser';
import { MovieDetailItemModule } from './movie-detail';

@NgModule({
  declarations: [
    MoviesComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    MovieItemModule,
    MovieDetailItemModule
  ],
  providers: [
    MoviesService,
  ],
  exports: [
    MoviesComponent,
  ]
})
export class MoviesModule {
}
