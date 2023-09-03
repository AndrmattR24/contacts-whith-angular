import { Component } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-contactos',
  templateUrl: './formulario-contactos.component.html',
  styleUrls: ['./formulario-contactos.component.css']
})
export class FormularioContactosComponent {

  //variable de daros conectado a firebase
  data: any[] = [];


  constructor() {

  }

  saveContact() {
    console.log('Regitrado');
  }

}
