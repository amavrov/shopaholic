// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyA_ebtW3k2Sn8mao_6drdnSFpZFXojrjwc",
    authDomain: "shopaholic-98985.firebaseapp.com",
    databaseURL: "https://shopaholic-98985.firebaseio.com",
    projectId: "shopaholic-98985",
    storageBucket: "shopaholic-98985.appspot.com",
    messagingSenderId: "552587758510",
    appId: "1:552587758510:web:56c970791bea5872cf163f",
    measurementId: "G-NZ45T062HD"
  },
  admins : {
    mails: ["i.wrath@gmail.com"]
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
