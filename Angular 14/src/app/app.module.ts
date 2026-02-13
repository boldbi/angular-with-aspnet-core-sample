import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Dashboard } from './dashboard/dashboard.component';
import { appService } from './app.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: Dashboard },
    ]
    ),
    HttpClientModule
  ],
  providers: [appService],
  declarations: [
    AppComponent,
    Dashboard
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
