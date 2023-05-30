import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { SearchComponente } from 'src/components/search/search.component'
import { MainComponent } from 'src/components/main/main.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponente,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
