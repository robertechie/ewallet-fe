import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainlayoutComponent } from './Layout/mainlayout/mainlayout.component';
import { DashboardlayoutComponent } from './Layout/dashboardlayout/dashboardlayout.component';

@NgModule({
  declarations: [
    AppComponent,
    MainlayoutComponent,
    DashboardlayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
