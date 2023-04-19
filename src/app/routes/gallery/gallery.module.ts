import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { PageGalleryComponent } from './page-gallery/page-gallery.component';


@NgModule({
  declarations: [
    PageGalleryComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule { }
