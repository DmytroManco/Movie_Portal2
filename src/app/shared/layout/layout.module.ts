import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { HeaderModule } from './header/index';
import { FooterModule } from './footer/index';

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
