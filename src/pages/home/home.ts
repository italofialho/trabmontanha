import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DesafiosPage } from "../../pages/desafios/desafios";
import { RegisterPage } from "../../pages/register/register";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  register(){
    this.navCtrl.push(DesafiosPage);
  }

  openSelectGameMode(){
    this.navCtrl.push(DesafiosPage);
  }

}
