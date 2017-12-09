import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DialogoProvider } from '../../../providers/dialogo/dialogo';
import { Events } from 'ionic-angular/util/events';
import { Alocacoes } from '../../../models/alocacoes';

@IonicPage()
@Component({
  selector: 'page-adicionar-alocacao',
  templateUrl: 'adicionar-alocacao.html',
})
export class AdicionarAlocacaoPage {

  public alocacao: Alocacoes = new Alocacoes();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewController: ViewController,
    public dialogo: DialogoProvider,
    public events: Events
  ) { }

  cancelar() {

    this.viewController.dismiss();
  }

  gravar() {

    if (!this.alocacao.Aluno) {

      this.dialogo.exibaToastAlerta('Informe o aluno!');

      return;
    }

    if (!this.alocacao.Tarefa) {

      this.dialogo.exibaToastAlerta('Informe a tarefa!');

      return;
    }

    this.events.publish('home:adicionarAlocacao', this.alocacao);

    this.viewController.dismiss();
  }

}
