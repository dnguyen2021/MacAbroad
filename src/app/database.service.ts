import { Injectable } from "@angular/core";
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../app/authservice.service'
import * as firebase from 'firebase/app';
import 'firebase/storage'

export class FirebaseService {

  unsubscribeOnLogOut() {
    throw new Error("Method not implemented.");
  }
  constructor(
    public afs: AngularFirestore, 
    public afAuth: AuthService
  ){ }


  createTask(value){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('users').doc(currentUser.uid).collection('User Data').add({
        Name: value.Name,
        email: value.email,
        Program: value.Program
      })
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

    
}
