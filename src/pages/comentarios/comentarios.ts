import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Alocacoes } from '../../models/alocacoes';
import { DialogoProvider } from '../../providers/dialogo/dialogo';
import { Tarefa } from '../../models/tarefa';

@IonicPage()
@Component({
  selector: 'page-comentarios',
  templateUrl: 'comentarios.html',
})
export class ComentariosPage {

  tarefas: Tarefa[] = [{
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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private dialogo: DialogoProvider) {
  }

  comentar(tarefa: Tarefa) {

    this.navCtrl.push('AdicionarComentariosPage', { Tarefa: tarefa });
  }
}
