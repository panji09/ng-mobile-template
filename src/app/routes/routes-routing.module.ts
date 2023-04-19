import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from '@layout/default-layout/default-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        data: { title: 'Home' },
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'about-us',
        data: { title: 'About Us' },
        loadChildren: () =>
          import('./about-us/about-us.module').then((m) => m.AboutUsModule),
      },
      {
        path: 'gallery',
        data: { title: 'Gallery' },
        loadChildren: () =>
          import('./gallery/gallery.module').then((m) => m.GalleryModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}
