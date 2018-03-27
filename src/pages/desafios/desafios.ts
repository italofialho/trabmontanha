import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerguntaPage } from "../pergunta/pergunta";
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the DesafiosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-desafios',
  templateUrl: 'desafios.html',
})
export class DesafiosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DesafiosPage');
  }

  backToLogin(){
    this.navCtrl.push(HomePage);
  }

  startSinglePlayer(){
    this.navCtrl.push(PerguntaPage);
  }

  startMultiPlayer(){
    this.navCtrl.push(PerguntaPage);
  }

}
