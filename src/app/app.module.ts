import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HabilidadesModule } from './habilidades/habilidades.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HabilidadesModule,
    UsuariosModule,
    LoginModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
