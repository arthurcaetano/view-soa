import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DialogoProvider } from '../dialogo/dialogo';
import { Tarefa } from '../../models/tarefa';

const urlApi = 'http://localhost:12026/tarefas';

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

        return this.mapeieTarefa(resp);
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

    if (tarefa.Id == 0) {

      this.dialogo.exibaLoadingPadrao();

      return this.http
        .post(urlApi, {
          id: tarefa.Id,
          titulo: tarefa.Titulo,
          descricao: tarefa.Descricao,
          inicio: tarefa.Inicio,
          encerramento: tarefa.Fim
        })
        .toPromise()
        .then(resp => {

          this.dialogo.removaLoading();

          return resp;
        });
    } else {

      this.atualizar(tarefa);
    }
  }

  atualizar(tarefa: Tarefa) {

    this.dialogo.exibaLoadingPadrao();

    return this.http
      .put(urlApi, {
        id: tarefa.Id,
        titulo: tarefa.Titulo,
        descricao: tarefa.Descricao,
        inicio: tarefa.Inicio,
        encerramento: tarefa.Fim
      })
      .toPromise()
      .then(resp => {

        this.dialogo.removaLoading();

        return resp;
      });
  }

  mapeieTarefa(resp) {

    debugger;
    
    let tarefas: Tarefa[] = [];

    resp.forEach(t => {

      tarefas.push({
        Id: t.id,
        Titulo: t.titulo,
        Descricao: t.descricao,
        Inicio: new Date(t.inicio),
        Fim: new Date(t.encerramento)
      });
    });

    return tarefas;
  }
}
