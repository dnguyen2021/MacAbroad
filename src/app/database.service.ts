import { Injectable, ComponentFactoryResolver } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AuthService } from '../app/authservice.service'
import * as firebase from 'firebase/app';
import 'firebase/storage'
import { NavController} from '@ionic/angular';

export class FirebaseService {

  unsubscribeOnLogOut() {
    throw new Error("Method not implemented.");
  }

  constructor(
    public afs: AngularFirestore, 
    public afAuth: AuthService, 
    public navCtrl: NavController, 
 
  ){ 
  }

  createTask(value){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('users').doc(currentUser.email).collection('User Data').add({
        Program: value.Program,
        Language: value.Language,
        Recommended : value.Recommended,
        Location: value.Location,
        Housing: value.Housing,
        MinimumGPARequirement: value.MinimumGPARequirement,
        AcademicFeatures: value.AcademicFeatures, 
        Value: value.value,
        img: value.img
      })
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  createProfileInfo(value){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('userID').doc(currentUser.email).collection('User Data').add({
        Name: value.Name,
        email: value.email,
        Program: value.Program, 
        GPA: value.GPA, 
        Major: value.Major
      })
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }


  myDate: String = new Date().toISOString().slice(0, 11);

  createReview(value){
    //will put review into associated user 
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('reviews').doc(value.Program).collection(currentUser.email).add({
        Name: value.Name,
        email: value.email,
        Program: value.Program, 
        Review: value.Review,
        Rating: value.Rating
        
      })
      .then(

        res => resolve(res),
        err => reject(err)
      )

      
      //should be more accessible for getReviews function 
      this.afs.collection('reviews').add({
        Name: value.Name,
        email: value.email,
        Program: value.Program, 
        Review: value.Review, 
        Date: value.Date,
        Rating: value.Rating
      })
      .then(

        res => resolve(res),
        err => reject(err)
      )


    })
  }


}