import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YuGiOhComponent } from './yu-gi-oh/yu-gi-oh.component';
import {HttpClientModule} from '@angular/common/http';
import { MazzoComponent } from './mazzo/mazzo.component'
@NgModule({
  declarations: [
    AppComponent,
    YuGiOhComponent,
    MazzoComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
