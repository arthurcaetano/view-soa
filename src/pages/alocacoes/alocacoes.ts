import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Events } from 'ionic-angular';
import { Alocacoes } from '../../models/alocacoes';
import { DialogoProvider } from '../../providers/dialogo/dialogo';

@IonicPage()
@Component({
  selector: 'page-alocacoes',
  templateUrl: 'alocacoes.html',
})
export class AlocacoesPage {

  alocacoes: Alocacoes[] = [{
    Id: 1,
    Aluno: {
      Id: 1,
      Nome: 'Arthur Caetano Borges Silva',
      Curso: 'Arquitetura',
      Materia: 'SOA'
    },
    Tarefa: {
      Id: 1,
      Titulo: 'Tarefa 1',
      Descricao: 'Tarefa 1',
      Inicio: new Date(),
      Fim: new Date()
    }
  },
  {
    Id: 2,
    Aluno: {
      Id: 2,
      Nome: 'Arthur',
      Curso: 'Arquitetura',
      Materia: 'SOA'
    },
    Tarefa: {
      Id: 2,
      Titulo: 'Tarefa 2',
      Descricao: 'Tarefa 2',
      Inicio: new Date(),
      Fim: new Date()
    }
  }];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private dialogo: DialogoProvider,
    private events: Events) {

    this.events.subscribe('home:adicionarAlocacao', (alocacao: Alocacoes) => {

      this.alocacoes = this.alocacoes.filter(a => a.Id != alocacao.Id);

      this.alocacoes.push(alocacao);
    });
  }

  adicionarAlocacao() {

    let modal = this.modalCtrl.create('AdicionarAlocacaoPage', {}, { cssClass: 'modal-alocacoes' });

    modal.present();
  }

  excluir(alocacao: Alocacoes) {

    this.dialogo
      .exibaAlertaConfirme('Tem certeza que deseja remover a alocação?')
      .then(() => {

        this.alocacoes = this.alocacoes.filter(a => a.Id != alocacao.Id);
      })
      .catch(_ => _);
  }

}
