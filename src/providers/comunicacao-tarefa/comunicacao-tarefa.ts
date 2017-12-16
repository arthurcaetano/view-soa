import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DialogoProvider } from '../dialogo/dialogo';
import { Tarefa } from '../../models/tarefa';

const urlApi = '';

@Injectable()
export class ComunicacaoTarefaProvider {

  constructor(
    private http: HttpClient,
    private dialogo: DialogoProvider) { }

  obtenha() {

    this.dialogo.exibaLoadingPadrao();

    return this.http
      .get(urlApi)
      .toPromise()
      .then((resp: any) => {

        this.dialogo.removaLoading();

        return resp;
      });
  }

  remover(tarefa: Tarefa) {

    let servico = `${urlApi}/${tarefa.Id}`;

    this.dialogo.exibaLoadingPadrao();

    return this.http
      .delete(servico)
      .toPromise()
      .then(resp => {

        this.dialogo.removaLoading();

        return resp;
      });
  }

  adicionar(tarefa: Tarefa) {

    this.dialogo.exibaLoadingPadrao();

    return this.http
      .post(urlApi, {
        tarefa: '',
        aluno: ''
      })
      .toPromise()
      .then(resp => {

        this.dialogo.removaLoading();

        return resp;
      });
  }

}
