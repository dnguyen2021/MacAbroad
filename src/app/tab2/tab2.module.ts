import { IonicModule, NavController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { Component } from '@angular/core';

name

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page]
  
})
@Component({
  selector: 'tab2.page',
  templateUrl: 'tab2.page.html',
  styleUrls: ['./tab2.page.scss',]
  
})


export class Tab2PageModule {
  majors = [
    {"name": "Any"},
    {"name": "American Studies"},
    {"name": "Anthropology"},
    {"name": "Art History"},
    {"name": "Art"},
    {"name": "Asian Studies"},
    {"name": "Biology"},
    {"name": "Chemistry"},
    {"name": "Chinese"},
    {"name": "Classics"},
    {"name": "Computer Science"},
    {"name": "Economics"},
    {"name": "Education Studies"},
    {"name": "English"},
    {"name": "Enviromental Studies"},
    {"name": "French"},
    {"name": "Geography"},
    {"name": "Geology"},
    {"name": "German"},
    {"name": "History"},
    {"name": "International Studies"},
    {"name": "Japanese"},
    {"name": "Latin American Studies"},
    {"name": "Linguistics"},
    {"name": "Math"},
    {"name": "Media Studies"},
    {"name": "Music"},
    {"name": "Neuroscience"},
    {"name": "Philosophy"},
    {"name": "Physics"},
    {"name": "Political Science"},
    {"name": "Psychology"},
    {"name": "Religious Studies"},
    {"name": "Russian"},
    {"name": "Sociology"},
    {"name": "Spanish"},
    {"name": "Theatre and Dance"},
    {"name": "Women's, Gender and Sexuality Studies"}
  ];
  constructor(public navCtrl: NavController){

  }
// selectedMajor: string = '';
// selectedLanguage: string = '';
// selectedCountry: string = '';
// //event handler for the select element's change event
// selectChangeHandler (event: any) {
//   //update the ui
//   this.selectedMajor = event.target.value;
//   this.selectedLanguage = event.target.value;
//   this.selectedCountry = event.target.value;
// }
public majorsFn(): void {
  console.log(this.Major);

  let item = this.Major;
  this.name = item.name;

}
}




