import { Component } from '@angular/core';
import { ContactosService } from 'src/app/services/contactos.service';

@Component({
  selector: 'app-listar-contactos',
  templateUrl: './listar-contactos.component.html',
  styleUrls: ['./listar-contactos.component.css']
})
export class ListarContactosComponent {

  dataContactos: any[] = [];

  constructor(public _contactosService: ContactosService) {
    this.listar();
  }

  listar() {
    this._contactosService
      .findAll().subscribe((response: any) => {
        this.dataContactos = response;
      })
  }
}
