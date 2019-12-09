import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { UserInputPage } from "../user-input/user-input.page";
import { DataService } from "../services/data.service";
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage'; 

@Component({
  selector: 'app-saved-programs',
  templateUrl: './saved-programs.page.html',
  styleUrls: ['./saved-programs.page.scss'],
})
export class SavedProgramsPage implements OnInit {
  


  constructor(public navCtrl: NavController, private dataService: DataService, public afs: AngularFirestore) {
  }

  ngOnInit() {
    this.createSavedItems();
  }

  savedItems: any = [];
  saved: any; 
  createSavedItems(){

    let currentUser = firebase.auth().currentUser;
    this.saved = this.afs.firestore.collection('users').doc(currentUser.email).collection('User Data');  
    this.saved.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.savedItems.push((doc.id, 
          "=>",
          doc.data()
        
        )); 

  })})
  }

  goBack(){
    this.navCtrl.navigateForward('/tabs/user-input')
  }

  removeItem2(i){
    this.savedItems.splice(i, 1);
  }

  goForum(){
    this.navCtrl.navigateForward('/tabs/forum')
  }
}