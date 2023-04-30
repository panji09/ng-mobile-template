import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBlogComponent } from './page-blog/page-blog.component';
import { PageDetailComponent } from './page-detail/page-detail.component';

const routes: Routes = [
  { path: '', component: PageBlogComponent },
  { path: ':slug', component: PageDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
