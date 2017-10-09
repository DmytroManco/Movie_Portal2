import { Routes } from '@angular/router';
import { MoviesComponent } from './features';
import { MovieDetailComponent } from './features';
export const ROUTES: Routes = [
  {path: 'movies', component: MoviesComponent},
  {path: '', redirectTo: '/movies', pathMatch: 'full'},
  {path: 'movie/:id', component: MovieDetailComponent},
  {path: '**', component:  MoviesComponent}
];
