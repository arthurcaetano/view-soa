import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionarComentariosPage } from './adicionar-comentarios';

@NgModule({
  declarations: [
    AdicionarComentariosPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionarComentariosPage),
  ],
})
export class AdicionarComentariosPageModule {}
