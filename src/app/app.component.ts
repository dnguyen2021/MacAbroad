import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Platform, Config } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NgModule } from '@angular/core'; 
import { RecommenderService } from './recommender.service';

import { AuthService } from './authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [RecommenderService]
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar, 
    public recommender: RecommenderService,
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
  
}

