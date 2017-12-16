import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tarefa } from '../../../models/tarefa';
import { Comentario } from '../../../models/comentario';
import { ComunicacaoComentarioProvider } from '../../../providers/comunicacao-comentario/comunicacao-comentario';
import { DialogoProvider } from '../../../providers/dialogo/dialogo';

@IonicPage()
@Component({
  selector: 'page-adicionar-comentarios',
  templateUrl: 'adicionar-comentarios.html',
})
export class AdicionarComentariosPage {

  public tarefa: Tarefa;
  public comentarioTexto: string = '';
  public comentarios: Comentario[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private comunicacao: ComunicacaoComentarioProvider,
    private dialogo: DialogoProvider) {

    this.tarefa = this.navParams.get('Tarefa');

    this.comunicacao
      .obtenhaPelaTarefa(this.tarefa.Id)
      .then(comentarios => {

        this.comentarios = comentarios;
      });
  }

  comentar() {

    this.comentarios.push({
      Id: 0,
      Aluno: {
        Id: 1,
        Nome: 'Fulano de Sá',
        Curso: 'Arquitetura',
        Materia: 'SOA'
      },
      Data: new Date(),
      Tarefa: this.tarefa,
      Comentario: this.comentarioTexto
    });

    this.comentarioTexto = '';
  }

  excluir(comentario: Comentario) {

    this.dialogo
      .exibaAlertaConfirme('Tem certeza que deseja remover o comentário?')
      .then(() => {

        this.comunicacao.remover(comentario);
      })
      .catch(_ => _);
  }
}
