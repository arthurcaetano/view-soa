import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tarefa } from '../../../models/tarefa';
import { Comentario } from '../../../models/comentario';

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
    public navParams: NavParams) {

    this.tarefa = this.navParams.get('Tarefa');

    this.comentarios = [
      {
        Id: 1,
        Aluno: {
          Id: 2,
          Nome: 'Fulano de Sá',
          Curso: 'Arquitetura',
          Materia: 'SOA'
        },
        Data: new Date(),
        Tarefa: this.tarefa,
        Comentario: 'Comentário 1'
      },
      {
        Id: 2,
        Aluno: {
          Id: 1,
          Nome: 'Arthur',
          Curso: 'Arquitetura',
          Materia: 'SOA'
        },
        Data: new Date(),
        Tarefa: this.tarefa,
        Comentario: 'Comentário 2'
      }
    ];
  }

  comentar() {

    this.comentarios.push({
      Id: 1,
      Aluno: {
        Id: 2,
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

}
