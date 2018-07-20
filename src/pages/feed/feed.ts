import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nome_usuario: string = "Usuário";
  public objeto_feed = {
    titulo:"Usuário",
    data:"14 de novembro, 1998",
    descricao:"Primeiro post do meu feed.",
    qnt_likes:12,
    qnt_comentarios:4,
    hora_post:"11hr atrás"
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

}
