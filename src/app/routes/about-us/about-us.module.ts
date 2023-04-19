import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { PageAboutUsComponent } from './page-about-us/page-about-us.component';


@NgModule({
  declarations: [
    PageAboutUsComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }
