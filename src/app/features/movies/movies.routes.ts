import { Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';

export const MoviesRouter: Routes = [
  {path: 'movies', component: MoviesComponent},
  {path: '', component: MoviesComponent}
];
