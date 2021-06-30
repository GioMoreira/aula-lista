import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ListaService {
  private minhaLista;
  private api = 'http://localhost/api/';

  public getLista(){
    return this.minhaLista;
  }

  public setLista(lista){
     this.minhaLista=lista;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(private http: HttpClient) {
    this.atualizaLista();
  }

  atualizaLista(){
    this.minhaLista=[] ;
    this.http.get<any[]>(this.api+'consulta.php')
              .subscribe( dados => {
                 dados.forEach( item => {
                  this.minhaLista.push([item.codigo,item.descricao]);
                 });
              });
  }

  async ngOnInit() {
  }

  public async add(valor) {
    this.http.get<any[]>(this.api+'incluir.php?valor='+valor.toString())
              .subscribe( dados => {
                this.atualizaLista();
              });
  }


  public async remove(indice) {
    this.http.get<any[]>(this.api+'remover.php?codigo='+indice.toString())
              .subscribe( dados => {
                this.atualizaLista();
              });
  }

  public async limpar(indice) {
    this.http.get<any[]>(this.api+'limpar.php')
    .subscribe( dados => {
      this.atualizaLista();
    });
  }

}
