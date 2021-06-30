/* eslint-disable @typescript-eslint/quotes */
import { Component, ViewChild } from '@angular/core';
import { ListaService } from '../servicos/lista.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('input') meuInput;

  // eslint-disable-next-line @typescript-eslint/ban-types
  inputTexto: String = "";

  listaService: ListaService;

  constructor(private http: HttpClient) {
    this.listaService = new ListaService(http);
  }

  adiciona() {
    this.listaService.add(this.inputTexto);
    this.inputTexto="";
    this.meuInput.setFocus();
  }

  remover(indice) {
    this.listaService.remove(indice);
  }


}
