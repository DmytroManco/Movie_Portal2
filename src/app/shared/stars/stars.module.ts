import { NgModule } from '@angular/core';
import { StarsComponent } from './stars.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    StarsComponent
  ],
  exports: [
    StarsComponent
  ]
})
export class StarsModule { }
