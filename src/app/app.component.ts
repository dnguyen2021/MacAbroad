import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Platform, Config } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NgModule } from '@angular/core'; 
// import { RecommenderService } from './recommender.service';
// import { MbscFormOptions, MbscPageOptions } from '@mobiscroll/angular-lite'

// import { mobiscroll, MbscScrollViewOptions, MbscNavOptions, MbscListviewOptions } from '@mobiscroll/angular';


import { AuthService } from './authservice.service';

// mobiscroll.settings ={
//   theme: 'ios',
//   themeVariant: 'light'
// }

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar, 
    // public recommender: RecommenderService,
    private authenticationService: AuthService,
    private router: Router
  ) {
    this.initializeApp();
  
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      
 
    });
  }

  // settings: MbscFormOptions = {
  //   theme: 'ios',
  // };
  // pageSettings: MbscPageOptions = {
  //   theme: 'ios',
  // }
//   settings: MbscListviewOptions = {
//     actionable: false,
//     stages: [{
//         percent: -20,
//         action: (event, inst) => {
//             inst.remove(event.target);
//             return false;
//         }
//     }, {
//         percent: 20,
//         action: (event, inst) => {
//             inst.remove(event.target);
//             return false;
//         }
//     }]
// };
  
}

