import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public navCtrl: NavController) {

  }

  goToUserInput(){
    this.navCtrl.navigateForward('/tabs/user-input');
  }

  goToLogin(){
    this.navCtrl.navigateForward('/tabs/tab5')
  }

}
