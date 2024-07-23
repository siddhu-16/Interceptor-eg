import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApicomponentComponent } from './apicomponent/apicomponent.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeaderInterceptor } from './apicomponent/header.interceptor';
import { LoggingInterceptor } from './apicomponent/logging.interceptor';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ApicomponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:HeaderInterceptor,multi :true},
    {provide:HTTP_INTERCEPTORS,useClass:LoggingInterceptor,multi :true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
