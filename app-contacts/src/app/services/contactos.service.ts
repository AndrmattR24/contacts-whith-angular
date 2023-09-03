import { Injectable } from '@angular/core';

//consultor a firebase
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  url_data = "https://app-contactos-7e4e5-default-rtdb.firebaseio.com";

  constructor(private httpCli: HttpClient) {

  }

  findAll() {
    return this.httpCli.get(`${this.url_data}/contactos.json`);
  }

}
