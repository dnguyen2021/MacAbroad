import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { UserInputPage } from "../user-input/user-input.page";
import { DataService } from "../services/data.service";
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-saved-programs',
  templateUrl: './saved-programs.page.html',
  styleUrls: ['./saved-programs.page.scss'],
})


export class SavedProgramsPage implements OnInit {
  public savedItems: any = [];
  public boolean: string;
  alertController: AlertController;
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
    console.log(this.savedItems)
  }

  goForum(){
    this.navCtrl.navigateForward('/tabs/forum')
  }

  removeItem(i){

      // const alert = await this.alertController.create({
      //   header: 'Confirm!',
      //   message: 'Are you sure want to delete this info?',
      //   buttons: [
      //     {
      //       text: 'Cancel',
      //       role: 'cancel',
      //       cssClass: 'secondary',
      //       handler: (blah) => {
      //         console.log('cancel');
      //       }
      //     }, {
      //       text: 'Okay',
      //       handler: () => {
      var programDelete = this.savedItems[i];
      console.log('program to be deleted extracted');
      console.log(programDelete)

      this.saved = this.afs.firestore.collection('users').doc(this.currentUser.email).collection('User Data');
      this.saved.get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {

            if(doc.data().Program == programDelete.Program){
              console.log('i am getting here');
              firebase.database().ref('users/'+this.currentUser.email+'/'+'User Data'+'/' + doc.id).remove(); //need to get docID
            }
              }
            )
          })

      // firebase.database().ref('users/'+this.currentUser.email+'/'+'User Data'+i).remove(); //need to get docID
      //       }
      //     }
      //   ]
      // });

      // await alert.present();
      this.savedItems.splice(i, 1);
    }}
