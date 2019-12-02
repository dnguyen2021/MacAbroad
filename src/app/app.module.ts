import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {IonicApp, IonicErrorHandler } from 'ionic-angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RecommenderService } from './recommender.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'; 
import { AngularFireDatabase} from 'angularfire2/database';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { IonicStorageModule } from '@ionic/storage';

import { environment } from '../environments/environment'; 
import { FirebaseService } from './database.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { Tab4Page } from '../app/tab4/tab4.page';
import { TimelineComponent } from '../app/timeline/timeline.component';
import { TimelineDateComponent } from '../app/timeline/timeline.component';
import { TimelineItemComponent } from '../app/timeline/timeline.component'; 

import * as firebase from 'firebase';

firebase.initializeApp(environment.config); 

@NgModule({
  declarations: [
  AppComponent,
  // Tab4Page,   
  TimelineComponent,
  TimelineItemComponent,
  TimelineDateComponent
],
  entryComponents: [
    // AppComponent,
    // Tab4Page
  ],
  imports: [
    BrowserModule, AngularFirestoreModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, 
  FormsModule, ReactiveFormsModule, AngularFireAuthModule, AngularFireModule.initializeApp(environment.config) 
  ,IonicStorageModule.forRoot(), AngularFireDatabaseModule, AngularFireDatabaseModule
],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseService, 
    AngularFirestore, 
    {provide:
       [RouteReuseStrategy, RecommenderService] , useClass: IonicRouteStrategy
      }, 
    {provide: 
      ErrorHandler, useClass: IonicErrorHandler
    }
  ],
  bootstrap: [AppComponent], 

  exports: [ReactiveFormsModule] 

})
export class AppModule {}
