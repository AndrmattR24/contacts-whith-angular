import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormularioContactosComponent } from './components/formulario-contactos/formulario-contactos.component';
import { ListarContactosComponent } from './components/listar-contactos/listar-contactos.component';

//para react
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


// cliente http para consultas a firebase
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  //tema de inyeccion de componentes
  declarations: [
    AppComponent,
    NavbarComponent,
    FormularioContactosComponent,
    ListarContactosComponent
  ],
  //tema de librerias
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],

  // tema de providers y servicios
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
