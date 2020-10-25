import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxSuccessBoxModule} from '../../../ngx-success-box/src/lib/ngx-success-box.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSuccessBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
