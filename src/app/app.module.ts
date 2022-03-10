import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import du module Projet
import { ProjetModule } from './projet/projet.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProjetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
