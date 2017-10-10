import { NgModule } from '@angular/core';
import { NoContentComponent } from './no_content.component';
import { SharedModule } from '../../shared/index';

@NgModule({
  declarations: [
    NoContentComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    NoContentComponent
  ]
})
export class NoContentModule { }
