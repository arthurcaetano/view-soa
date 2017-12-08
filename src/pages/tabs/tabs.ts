import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'CadastroAlunoPage';
  tab2Root = 'CadastroTarefaPage';
  tab3Root = ContactPage;

  constructor() {

  }
}
