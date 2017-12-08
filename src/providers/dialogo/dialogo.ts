import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

@Injectable()
export class DialogoProvider {

  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController) {

  }

  exibaAlertaConfirme(mensagem: string) {

    return new Promise((resolve, reject) => {

      this.exibaAlerta(mensagem, "Confirmação", [
        {
          text: 'Não',
          handler: () => reject()
        },
        {
          text: 'Sim',
          handler: () => resolve()
        }]);
    });
  }

  exibaToastSucesso(mensagem: string) {

    this.exibaToast(mensagem, null, 'toast-sucesso');
  }

  exibaToastInformacao(mensagem: string) {

    this.exibaToast(mensagem, null, 'toast-info');
  }


  exibaToastAlerta(mensagem: string) {

    this.exibaToast(mensagem, null, 'toast-alerta');
  }

  private exibaAlerta(mensagem: string, titulo: string, buttons?: Array<any>, inputs?: Array<any>) {

    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: mensagem || '',
      buttons: buttons || ['Ok'],
      inputs: inputs,
      cssClass: 'alerta'
    });

    alert.present();
  }

  private exibaAlertaDeInconsistencia(mensagem: string) {

    this.exibaAlerta(mensagem, "Atenção!");
  }

  private exibaToast(mensagem: string, duracao: number = null, cssClass: string = null) {

    duracao = duracao != null ? duracao : mensagem.length <= 40 ? 4000 : 8000;

    const toast = this.toastCtrl.create({
      message: mensagem,
      duration: duracao,
      position: 'top',
      cssClass: cssClass
    });

    toast.present();
  }
}
