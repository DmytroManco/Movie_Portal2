import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { HeaderModule } from './header/';
import { FooterModule } from './footer/';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    HeaderModule,
    FooterModule
  ],
  exports: [
    LayoutComponent
  ]
})

export class LayoutModule { }
