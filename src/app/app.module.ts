import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
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

import * as firebase from 'firebase';

import { HttpModule } from '@angular/http';
import { SwingModule } from 'angular2-swing';
import {
 StackConfig,
 Stack,
 Card,
 ThrowEvent,
 DragEvent,
 SwingStackComponent,
 SwingCardComponent} from 'angular2-swing';

firebase.initializeApp(environment.config);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [
  ],
  imports: [BrowserModule, AngularFirestoreModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,
    FormsModule, ReactiveFormsModule, AngularFireAuthModule, AngularFireModule.initializeApp(environment.config)

    , IonicStorageModule.forRoot(), AngularFireDatabaseModule, AngularFireDatabaseModule, HttpModule,
      SwingModule],

  providers: [
    StatusBar,
    SplashScreen,
    FirebaseService,
     AngularFirestore,
     { provide: [RouteReuseStrategy, RecommenderService] , useClass: IonicRouteStrategy},
  ],
  bootstrap: [AppComponent],

  exports: [ReactiveFormsModule]

})
export class AppModule {}
