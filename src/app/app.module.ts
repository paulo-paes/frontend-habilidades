import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HabilidadesModule } from './habilidades/habilidades.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HabilidadesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
