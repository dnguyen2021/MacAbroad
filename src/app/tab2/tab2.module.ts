import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { Component } from '@angular/core';
import {SubmitComponent} from '../submit/submit.component'
import { RecommenderService } from '/Users/angelsylvester/MacAbroad/MacAbroad/src/app/recommender.service';



@NgModule({
  imports: [ 
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page, SubmitComponent],
  providers: [RecommenderService] , 
  exports: []
})
@Component({
  selector: 'tab2.page',
  templateUrl: 'tab2.page.html',
  styleUrls: ['./tab2.page.scss',]
})





export class Tab2PageModule {
  public selectedMajor: string;
  public selectedLanguage: string;
  public selectedCountry: string;
  recommender: RecommenderService; 
  public JSONFILE; 

  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedMajor = event.target.value;
    this.selectedLanguage = event.target.value;
    this.selectedCountry = event.target.value; 

  }

  getPrograms(){
    this.JSONFILE = this.recommender.readJSON(); 
  }

    
  }



  








