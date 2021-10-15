/* eslint-disable */
import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { db, firebaseApp } from "./config/firebase";

const app = createApp(App).use(store).use(router).mount("#app");

// @ts-expect-error
app.config.globalProperties.$firebaseApp = firebaseApp;
// @ts-expect-error
app.config.globalProperties.$firestore = db;
