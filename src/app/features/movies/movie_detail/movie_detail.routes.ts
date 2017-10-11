import { Routes } from '@angular/router';
import { MovieDetailComponent } from './movie_detail.component';

export const MovieDetailRouter: Routes = [
  {path: 'movie/:id', component: MovieDetailComponent}
];
