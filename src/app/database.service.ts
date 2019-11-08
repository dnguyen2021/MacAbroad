
import { Injectable } from "@angular/core";
import { AngularFirestore } from 'angularfire2/firestore';


export class FirebaseService {

  unsubscribeOnLogOut() {
    throw new Error("Method not implemented.");
  }

  constructor(
    
    public afs: AngularFirestore
  ){ }



    
}
