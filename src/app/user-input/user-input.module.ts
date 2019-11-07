import { IonicModule, NavController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserInputPage } from './user-input.page';
import { Component } from '@angular/core';
import {SubmitComponent} from '../submit/submit.component'



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: UserInputPage }])
  ],
  declarations: [UserInputPage, SubmitComponent]
})
@Component({
  selector: 'user-input.page',
  templateUrl: 'user-input.page.html',
  styleUrls: ['./user-input.page.scss',]
})
export class UserInputPageModule {
  public selectedMajor: string;
  public selectedLanguage: string;
  public selectedCountry: string;
  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedMajor = event.target.value;
    this.selectedLanguage = event.target.value;
    this.selectedCountry = event.target.value; 

  }
  constructor(public navCtrl: NavController){
    
  }
  goToResults() {
    const animationOptions = {
      animation: 'ios-transition',
      duration: 1000
    }
  }
    
  }



  








