import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecommendationPage } from './recommendation.page';

import {SwingModule} from 'angular2-swing';
import {Http} from '@angular/http';

// import {SwingModule} from 'angular2-swing';
// import {Http} from '@angular/http'

const routes: Routes = [
  {
    path: '',
    component: RecommendationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SwingModule
  ],
  declarations: [RecommendationPage]
})
export class RecommendationPageModule {}