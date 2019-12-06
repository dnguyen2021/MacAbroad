import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { UserInputPage } from "../user-input/user-input.page";
import { DataService } from "../services/data.service";
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage'

@Component({
  selector: 'app-saved-programs',
  templateUrl: './saved-programs.page.html',
  styleUrls: ['./saved-programs.page.scss'],
})


export class SavedProgramsPage implements OnInit {
  public savedItems: any = [];
  public boolean: string;
  constructor(public navCtrl: NavController, 
    private dataService: DataService, 
    public afs: AngularFirestore,

    ) {
  }

  public review: any; 
  public reviews: any[] = [];
  test: any; 
  item: any; 
  currentUser = firebase.auth().currentUser; 

  

  ngOnInit() {

    this.createSavedItems();

    this.review = this.afs.firestore.collection('reviews');  
    this.review.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.reviews.push((doc.id, 
          "=>",
          doc.data()
        )); 

 
        
  })})


}

  saved: any; 
  savedList: any[] = []; 

  createSavedItems(){
      
    this.saved = this.afs.firestore.collection('users').doc(this.currentUser.email).collection('User Data');  
    this.saved.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.savedList.push((doc.id, 
          "=>",
          doc.data()
          
        )); 
  
  })})

    this.savedItems = this.savedList;
  
  }

  goBack(){
    this.navCtrl.navigateForward('/tabs/user-input')
  }

  goForum(){
    this.navCtrl.navigateForward('/tabs/forum')
  }

  removeItem(i){
    this.savedItems.splice(i, 1);
  }

  }

  
  

  


