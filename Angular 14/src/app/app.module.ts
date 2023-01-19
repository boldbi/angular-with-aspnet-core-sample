import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { DashboardListing } from './dashboard-listing/dashboard-listing.component';
import { appService } from './app.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: DashboardListing },
    ]
    ),
    HttpClientModule
  ],
  providers: [appService],
  declarations: [
    AppComponent,
    DashboardListing
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
