import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Alocacoes } from '../../models/alocacoes';
import { DialogoProvider } from '../../providers/dialogo/dialogo';
import { Tarefa } from '../../models/tarefa';
import { ComunicacaoComentarioProvider } from '../../providers/comunicacao-comentario/comunicacao-comentario';
import { Comentario } from '../../models/comentario';

@IonicPage()
@Component({
  selector: 'page-comentarios',
  templateUrl: 'comentarios.html',
})
export class ComentariosPage {

  comentarios: Comentario[] = [];

  tarefas: Tarefa[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private dialogo: DialogoProvider,
    private comunicacao: ComunicacaoComentarioProvider) {
  }

  ionViewDidEnter() {

    this.comunicacao
      .obtenha()
      .then(comentarios => {

        this.comentarios = comentarios;

        this.tarefas = [{
          Id: 1,
          Titulo: 'Tarefa 1',
          Descricao: 'Tarefa 1',
          Inicio: new Date(),
          Fim: new Date()
        },
        {
          Id: 2,
          Titulo: 'Tarefa 2',
          Descricao: 'Tarefa 2',
          Inicio: new Date(),
          Fim: new Date()
        }];

      });
  }

  comentar(tarefa: Tarefa) {

    this.navCtrl.push('AdicionarComentariosPage', { Tarefa: tarefa });
  }

  obtenhaQuantidadeDeComentariosDaTarefa(tarefa: Tarefa) {

    return this.comentarios.filter(c => c.Tarefa.Id == tarefa.Id).length;
  }
}
