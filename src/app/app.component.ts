import { Component } from '@angular/core';

import { Platform, Config } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NgModule } from '@angular/core'; 
import { RecommenderService } from './recommender.service';

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
    public recommender: RecommenderService
  ) {
    this.initializeApp();
  
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  config;   
  JSONFILE;  
  displayProgramInfo(){ 
    this.recommender.readJSON()
    .subscribe((data: Config) => this.config = { 
      housing: data['housing'],
      programName: data['programName'],
      GPA: data['GPA'],
      language: data['language'],
      areaName: data['areaName'],
      academicFeatures: data['academicFeatures']
  })
}

testerFunction(){
  this.JSONFILE = this.recommender.readJSON(); 
    
}
  
}

