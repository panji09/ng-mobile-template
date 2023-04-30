import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { SharedModule } from '@shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [DefaultLayoutComponent, NavbarComponent, FooterComponent],
  imports: [CommonModule, SharedModule],
})
export class LayoutModule {}
