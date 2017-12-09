import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-adicionar-alocacao',
  templateUrl: 'adicionar-alocacao.html',
})
export class AdicionarAlocacaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarAlocacaoPage');
  }

}
