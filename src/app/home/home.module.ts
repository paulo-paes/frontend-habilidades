import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FooterModule } from '../shared/footer/footer.module';
import { HeaderModule } from '../shared/header/header.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { RouterModule } from '@angular/router';
import { HabilidadesModule } from '../habilidades/habilidades.module';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from '../core/auth/request.intercenptor';
import { NovaHomeComponent } from './novaHome/novaHome.component';
import { MenuLateralComponent } from './novaHome/menuLateral/menuLateral.component';

@NgModule({
    declarations: [
        HomeComponent,
        NovaHomeComponent,
        MenuLateralComponent
    ],
    exports: [
        HomeComponent,
        NovaHomeComponent,
        MenuLateralComponent
    ],
    imports: [
        CommonModule,
        HeaderModule,
        FooterModule,
        RouterModule,
        HabilidadesModule,
        UsuariosModule,
        HttpClientModule,
        HomeRoutingModule
    ]
})
export class HomeModule {}