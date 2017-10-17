import { NgModule } from '@angular/core';
import { MoviesService } from './services/movies.service';

@NgModule({
  providers: [MoviesService]
})
export class CoreModule { }
