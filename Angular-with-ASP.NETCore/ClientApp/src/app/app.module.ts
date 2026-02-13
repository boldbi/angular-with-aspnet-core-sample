import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appService } from './app.service';
import { AppComponent } from './app.component';
import { Dashboard } from './dashboard/dashboard.component';

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
       Dashboard,
    ],

    bootstrap: [AppComponent]
    })
export class AppModule { }
