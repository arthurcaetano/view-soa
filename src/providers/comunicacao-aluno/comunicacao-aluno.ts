import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DialogoProvider } from '../dialogo/dialogo';
import { Aluno } from '../../models/aluno';

const urlApi = '';

@Injectable()
export class ComunicacaoAlunoProvider {

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

  remover(aluno: Aluno) {

    let servico = `${urlApi}/${aluno.Id}`;

    this.dialogo.exibaLoadingPadrao();

    return this.http
      .delete(servico)
      .toPromise()
      .then(resp => {

        this.dialogo.removaLoading();

        return resp;
      });
  }

  adicionar(aluno: Aluno) {

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
