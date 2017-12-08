import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Tarefa } from '../../models/tarefa';
import { DialogoProvider } from '../../providers/dialogo/dialogo';

@IonicPage()
@Component({
  selector: 'page-cadastro-tarefa',
  templateUrl: 'cadastro-tarefa.html',
})
export class CadastroTarefaPage {

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
    public modalCtrl: ModalController,
    private dialogo: DialogoProvider) {

  }

  adicionarTarefa() {

    let modal = this.modalCtrl.create('EditarTarefaPage', {}, { cssClass: 'modal-tarefa' });

    modal.present();
  }

  editar(tarefa: Tarefa) {

    let modal = this.modalCtrl.create('EditarTarefaPage', { Tarefa: tarefa }, { cssClass: 'modal-tarefa' });

    modal.present();
  }

  excluir(tarefa: Tarefa) {

    this.dialogo
      .exibaAlertaConfirme('Tem certeza que deseja remover a tarefa?')
      .then(() => {

        this.tarefas = this.tarefas.filter(t => t.Id != tarefa.Id);
      })
      .catch(_ => _);
  }

}
