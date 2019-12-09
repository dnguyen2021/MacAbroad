import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { DataService } from "../services/data.service";
import { MenuController } from '@ionic/angular';
import { FirebaseService } from '../database.service'
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/storage'


@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.page.html',
  styleUrls: ['./user-input.page.scss'],
})
export class UserInputPage implements OnInit {
  public searchTerm: string = "";
  public searchTerm2: string = "";
  public searchTerm3: string = "";
  public saveTerm: string = "";
  public items: any = [];
  // public savedItems: any = [];
  public boolean;

  constructor(public navCtrl: NavController, private dataService: DataService,
    private fireBaseService: FirebaseService, private formBuilder: FormBuilder,) {
  }

  validations_form: FormGroup;

  public Name: string; 
  public email: string; 
  public Program: string; 
  public Language: string; 
  public Recommended: string; 
  public Location: string; 
  public Housing: string; 
  public MinimumGPARequirement: string; 
  public AcademicFeatures: string; 
  public Value: string; 
  public img: string; 


  ngOnInit(
  ){

    this.validations_form = this.formBuilder.group({
      Name: new FormControl(''),
      email: new FormControl(''),
      Program: new FormControl(''),
      Language: new FormControl(''),
      Recommended : new FormControl(''),
      Location: new FormControl(''),
      Housing: new FormControl(''),
      MinimumGPARequirement: new FormControl(''),
      AcademicFeatures: new FormControl(''), 
      Value: new FormControl(''), 
      img: new FormControl('')

    });


    this.setStars();
    this.createSort();
    this.setFilteredItems();

  }

  setStars(){
    this.items = this.dataService.createStars(this.searchTerm, this.searchTerm2, this.searchTerm3);
  }

  setFilteredItems() {
    this.items = this.dataService.filterItems();
  }

  createSort(){
    this.items = this.dataService.sort();
  }

  show(){
    this.boolean = true;
    // this.dataService.setShow();
  }


  saveData(item){
    this.dataService.save(item);
  }

  goToFavourites(){
    this.navCtrl.navigateForward('/tabs/saved-programs')
  }

  goToRecommendation(){
    this.navCtrl.navigateForward('/tabs/recommendation')
  }

  // openFirst() {
  //   this.menu.enable(true, 'first');
  //   this.menu.open('first');
  // }
  //
  // openEnd() {
  //   this.menu.open('end');
  // }
  //
  // openCustom() {
  //   this.menu.enable(true, 'custom');
  //   this.menu.open('custom');
  // }


}


