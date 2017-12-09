import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DialogoProvider } from '../../../providers/dialogo/dialogo';
import { Tarefa } from '../../../models/tarefa';

@IonicPage()
@Component({
  selector: 'page-editar-tarefa',
  templateUrl: 'editar-tarefa.html',
})
export class EditarTarefaPage {

  tarefa: Tarefa;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewController: ViewController,
    public dialogo: DialogoProvider) {

    this.tarefa = this.navParams.get('Tarefa');

    if (!this.tarefa) this.tarefa = new Tarefa();
  }

  cancelar() {

    this.viewController.dismiss();
  }

  gravar() {

    if (!this.tarefa.Titulo) {

      this.dialogo.exibaToastAlerta('Informe o título da tarefa!');

      return;
    }

    //this.events.publish('home:adicionarAluno', this.aluno);

    this.viewController.dismiss();
  }

}
