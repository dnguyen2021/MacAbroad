// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import * as firebase from 'firebase';

export const environment = {
  production: false,
//   config: {
//     apiKey: "API KEY",
//     authDomain: "AUTHDOMAIN",
//     databaseURL: "DATABASEURL",
//     projectId: "PROJECTID",
//     storageBucket: "STORAGEBUCKET",
//     messagingSenderId: "MESSENGERSENDERID"
//   }
config: {
   apiKey: "AIzaSyCGdu2aY4tHaYfzUu3f3CYuVR25kvlhNaM",
   authDomain: "macabroad-d7ddd.firebaseapp.com",
   databaseURL: "https://macabroad-d7ddd.firebaseio.com",
   projectId: "macabroad-d7ddd",
   storageBucket: "macabroad-d7ddd.appspot.com",
   messagingSenderId: "637312659482"
 }

 };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
