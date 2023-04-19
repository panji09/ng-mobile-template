import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAboutUsComponent } from './page-about-us/page-about-us.component';

const routes: Routes = [
  {
    path: '',
    component: PageAboutUsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutUsRoutingModule {}
