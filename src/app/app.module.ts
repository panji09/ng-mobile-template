import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '@shared/shared.module';
import { RoutesModule } from '@routes/routes.module';
import { LayoutModule } from '@layout/layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RoutesModule, SharedModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
