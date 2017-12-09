import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, Events } from 'ionic-angular';
import { Aluno } from '../../models/aluno';
import { DialogoProvider } from '../../providers/dialogo/dialogo';

@IonicPage()
@Component({
  selector: 'page-cadastro-aluno',
  templateUrl: 'cadastro-aluno.html',
})
export class CadastroAlunoPage {

  alunos: Aluno[] = [{
    Id: 1,
    Nome: 'Arthur Caetano Borges Silva',
    Curso: 'Arquitetura',
    Materia: 'SOA'
  },
  {
    Id: 2,
    Nome: 'Fulano de Sá',
    Curso: 'Arquitetura',
    Materia: 'SOA'
  }];

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private dialogo: DialogoProvider,
    private events: Events) {

    this.events.subscribe('home:adicionarAluno', (aluno: Aluno) => {

      this.alunos = this.alunos.filter(a => a.Id != aluno.Id);

      this.alunos.push(aluno);
    });
  }

  adicionarAluno() {

    let modal = this.modalCtrl.create('EditarAlunoPage', {}, { cssClass: 'modal-aluno' });

    modal.present();
  }

  editar(aluno: Aluno) {

    let modal = this.modalCtrl.create('EditarAlunoPage', { Aluno: aluno }, { cssClass: 'modal-aluno' });

    modal.present();
  }

  excluir(aluno: Aluno) {

    this.dialogo
      .exibaAlertaConfirme('Tem certeza que deseja remover o aluno?')
      .then(() => {

        this.alunos = this.alunos.filter(a => a.Id != aluno.Id);
      })
      .catch(_ => _);
  }

}
