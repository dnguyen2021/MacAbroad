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


  savedItems = [];
  saved: any;

  createSavedItems(){
    let currentUser = firebase.auth().currentUser;
    this.saved = this.afs.firestore.collection('users').doc(currentUser.email).collection('User Data');
    this.saved.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.savedItems.push(( doc.id, "=>",
          doc.data()
        ));

  })})

  }

  goBack(){
    this.navCtrl.navigateForward('/tabs/recommendation');
  }


  removeItem2(i){
    let currentUser = firebase.auth().currentUser;
    this.saved = this.afs.firestore.collection('users').doc(currentUser.email).collection('User Data');
    this.saved.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(this.savedItems[i]);
        console.log(doc.data());
        if (doc.data().Program == this.savedItems[i].Program){
          console.log('should get here');
          this.afs.firestore.collection('users').doc(currentUser.email).collection('User Data').doc(doc.id).delete();
        }

  })})

  this.savedItems.splice(i, 1);
  }
}
