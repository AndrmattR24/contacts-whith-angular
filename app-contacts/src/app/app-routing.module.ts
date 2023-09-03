import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioContactosComponent } from './components/formulario-contactos/formulario-contactos.component';

//REDIRECCIONAMIENTOS A LAS PAGINAS
const routes: Routes = [
  { path: 'contactos', component: FormularioContactosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
