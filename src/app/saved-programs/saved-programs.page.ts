import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { UserInputPage } from "../user-input/user-input.page";
import { DataService } from "../services/data.service";
import { AngularFirestore } from 'angularfire2/firestore';
import { MenuController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import 'firebase/storage';

@Component({
  selector: 'app-saved-programs',
  templateUrl: './saved-programs.page.html',
  styleUrls: ['./saved-programs.page.scss'],
})
export class SavedProgramsPage implements OnInit {



  constructor(public navCtrl: NavController, private dataService: DataService, public afs: AngularFirestore, private menu: MenuController) {
  }

  ngOnInit() {
    this.savedItems = this.dataService.getSaved(); 
    // this.removeDuplicates();
    // this.createSavedItems(); 

    //to run normally
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

//   removeDuplicates(){
//     let currArray = []; 
//     for (let i = 0; i <= this.savedItems.length; i++){ 
//       for (let j = 0; i <= this.savedItems.length; j++){
//           if (currArray[j] != this.savedItems[i])
//           {currArray.push(this.savedItems[i])}
//       }
  
//   }
//     currArray = this.savedItems; 

// }

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

  // goToForum(){
  //   this.navCtrl.navigateForward('/tabs/forum')
  // }

  // goToHome(){
  //   this.menu.close();
  //   this.navCtrl.navigateForward('/tabs/recommendation')
  // }
  //
  // goToProgramSearch(){
  //   this.navCtrl.navigateForward('/tabs/tab2')
  // }
  //
  // goToTimeline(){
  //   this.navCtrl.navigateForward('/tabs/tab4')
  // }
  //
  // goToStudentReviews(){
  //   this.navCtrl.navigateForward('/tabs/forum')
  // }
  //
  // goToLogout(){
  //   this.navCtrl.navigateForward('tabs/tab1')
  // }
  //
  // openFirst() {
  //   this.menu.enable(true, 'first');
  //   this.menu.open('first');
  // }
}
