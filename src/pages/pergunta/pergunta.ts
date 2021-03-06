import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DesafiosPage } from "../../pages/desafios/desafios";

/**
 * Generated class for the PerguntaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pergunta',
  templateUrl: 'pergunta.html',
})
export class PerguntaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerguntaPage');
  }

  desafios(){
    this.navCtrl.push(DesafiosPage);
  }

  ok(teste){
    if(!teste){
      alert('ERRADO');
    }else{
      alert('CORRETO');
    }
    
  }
}
