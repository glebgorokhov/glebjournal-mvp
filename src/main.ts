/* eslint-disable */
import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "firebase";
import { db, firebaseApp, storage } from "./config/firebase";
import "@/styles/index.scss";

// General Font
import "vfonts/Lato.css";
// Monospace Font
import "vfonts/FiraCode.css";

const app = createApp(App).use(store).use(router);

app.config.globalProperties.$firebase = firebase;
app.config.globalProperties.$firebaseApp = firebaseApp;
app.config.globalProperties.$firestore = db;
app.config.globalProperties.$storage = storage;

app.mount("#app");
