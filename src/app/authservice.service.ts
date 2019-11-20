import { Injectable } from "@angular/core";
import * as firebase from 'firebase/app';
import { FirebaseService } from './database.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authState: any; 

  constructor(
		private firebaseService: FirebaseService,
		public afAuth: AngularFireAuth
	){

    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    });

  }

  doRegister(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
     .then(
       res => resolve(res),
       err => reject(err))
   })
  }

  doLogin(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().signInWithEmailAndPassword(value.email, value.password)
     .then(
       res => resolve(res),
       err => reject(err))
   })
  }

	doLogout(){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signOut()
      .then(() => {
        this.firebaseService.unsubscribeOnLogOut();
        resolve();
      }).catch((error) => {
        reject();
      });
    })
  }

  get authenticated(): boolean {
    return this.authState !== null;
}

get user(): any {
    return this.authenticated ? this.authState : null;
}

get id(): string {
    return this.authenticated ? this.authState.uid : '';
}

get currentUserAnonymous(): boolean {
    return this.authenticated ? this.authState.isAnonymous : false
}

get currentUserDisplayName(): string {
    if (!this.authState)
        return 'Guest';
    
    if (this.currentUserAnonymous)
        return 'Anonymous';
    
    return (this.authState['displayName'] || 'User without a Name');
}


}