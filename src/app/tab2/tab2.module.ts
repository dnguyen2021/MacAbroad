import { IonicModule, NavController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { Component } from '@angular/core';


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
  selector: 'page-tab2',
  templateUrl: 'tab2.page.html',
})

export class Tab2PageModule {
  majors = {
    id:0
  }
  majorsList = [
    {major_id:1,
      major_name: 'Any'},
    {major_id:2,
      major_name: 'American Studies'},
    {major_id:3
      ,major_name: 'Anthropology'}
    // {major_name: 'Art History'},
    // {major_name: 'Art'},
    // {major_name: 'Asian Studies'},
    // {major_name: 'Biology'},
    // {major_name: 'Chemistry'},
    // {major_name: 'Chinese'},
    // {major_name: 'Classics'},
    // {major_name: 'Computer Science'},
    // {major_name: 'Economics'},
    // {major_name: 'Education Studies'},
    // {major_name: 'English'},
    // {major_name: 'Enviromental Studies'},
    // {major_name: 'French'},
    // {major_name: 'Geography'},
    // {major_name: 'Geology'},
    // {major_name: 'German'},
    // {major_name: 'History'},
    // {major_name: 'International Studies'},
    // {major_name: 'Japanese'},
    // {major_name: 'Latin American Studies'},
    // {major_name: 'Linguistics'},
    // {major_name: 'Math'},
    // {major_name: 'Media Studies'},
    // {major_name: 'Music'},
    // {major_name: 'Neuroscience'},
    // {major_name: 'Philosophy'},
    // {major_name: 'Physics'},
    // {major_name: 'Political Science'},
    // {major_name: 'Psychology'},
    // {major_name: 'Religious Studies'},
    // {major_name: 'Russian'},
    // {major_name: 'Sociology'},
    // {major_name: 'Spanish'},
    // {major_name: 'Theatre and Dance'},
    // {major_name: 'Womens, Gender and Sexuality Studies'}
  ]
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
//   public onChange(value){
//     console.log(value);
// }
}




