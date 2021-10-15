/* eslint-disable */
import firebase from "firebase";
import store from "@/store";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $firebase: firebase;
    $firebaseApp: firebase.app.App;
    $firestore: firebase;
    $store: store;
  }
}
