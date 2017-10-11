import { Routes } from '@angular/router';
import { NoContentComponent } from './no_content.component';

export const NoContentRouter: Routes = [
  {path: '**', component: NoContentComponent}
];
