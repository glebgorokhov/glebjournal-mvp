/* eslint-disable */
import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "firebase";
import { db, firebaseApp } from "./config/firebase";

const app = createApp(App).use(store).use(router);

app.config.globalProperties.$firebase = firebase;
app.config.globalProperties.$firebaseApp = firebaseApp;
app.config.globalProperties.$firestore = db;

app.mount("#app");
