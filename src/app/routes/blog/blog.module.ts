import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { PageBlogComponent } from './page-blog/page-blog.component';
import { PageDetailComponent } from './page-detail/page-detail.component';


@NgModule({
  declarations: [
    PageBlogComponent,
    PageDetailComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
