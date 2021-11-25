import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";


import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home.component";
import { MenuLateralComponent } from "./menuLateral/menuLateral.component";

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        MenuLateralComponent,
        FooterComponent
    ],
    exports: [
        HomeComponent,
        HeaderComponent,
        MenuLateralComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule
    ]
})
export class PaginaInicialModule {}