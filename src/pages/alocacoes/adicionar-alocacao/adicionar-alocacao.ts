import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DialogoProvider } from '../../../providers/dialogo/dialogo';
import { Events } from 'ionic-angular/util/events';
import { Alocacoes } from '../../../models/alocacoes';
import { Aluno } from '../../../models/aluno';
import { Tarefa } from '../../../models/tarefa';
import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';

@IonicPage()
@Component({
  selector: 'page-adicionar-alocacao',
  templateUrl: 'adicionar-alocacao.html',
})
export class AdicionarAlocacaoPage {

  alunos: Aluno[] = [
    {
      Id: 1,
      Nome: 'Arthur Caetano Borges Silva',
      Curso: 'Arquitetura',
      Materia: 'SOA'
    },
    {
      Id: 2,
      Nome: 'Arthur',
      Curso: 'Arquitetura',
      Materia: 'SOA'
    }
  ];

  tarefas: Tarefa[] = [
    {
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
    }
  ];

  alunoSelecionado: number;
  tarefaSelecionada: number;

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

    if (!this.alunoSelecionado) {

      this.dialogo.exibaToastAlerta('Informe o aluno!');

      return;
    }

    if (!this.tarefaSelecionada) {

      this.dialogo.exibaToastAlerta('Informe a tarefa!');

      return;
    }

    this.events.publish('home:adicionarAlocacao', this.criarAlocacao());

    this.viewController.dismiss();
  }

  private criarAlocacao(): Alocacoes {

    return {
      Id: '',
      Aluno: this.alunos.find(a => a.Id == this.alunoSelecionado),
      Tarefa: this.tarefas.find(t => t.Id == this.tarefaSelecionada)
    };
  }

}
