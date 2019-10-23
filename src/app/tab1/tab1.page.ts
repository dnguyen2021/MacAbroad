import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { Tab2Page } from '../tab2/tab2.page';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public navCtrl: NavController) {

  }
  
  goToTab2(){
    const animationsOptions = {
      animation: 'ios-transition',
      duration: 1000
    }

    this.navCtrl.navigateForward('/tab2');
  }

}
