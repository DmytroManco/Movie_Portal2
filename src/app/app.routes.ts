import { Routes } from '@angular/router';
import { MoviesRouter } from './features';
import { MovieDetailRouter } from './features';
import {  NoContentRouter } from './features';

export const ROUTES: Routes = [
  ...MoviesRouter,
  ...MovieDetailRouter,
  ...NoContentRouter
];
