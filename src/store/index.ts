import { createStore, Store } from "vuex";
import { firestoreAction, vuexfireMutations } from "vuexfire";
import { db, firebaseApp } from "@/config/firebase";
import { User, UserPlan, UserRole, UserType } from "../../types/User";
import firebase from "firebase";

export default createStore({
  state: {
    firebaseUser: null,
    user: null,
    comments: [],
  },
  getters: {
    firebaseUser(state) {
      return state.firebaseUser;
    },
    user(state) {
      return state.user;
    },
    comments(state) {
      return state.comments;
    },
  },
  mutations: {
    setFirebaseUser(state, payload) {
      state.firebaseUser = payload;
      console.log("➝ state.firebaseUser", payload);
    },
    ...vuexfireMutations,
  },
  actions: {
    subscribeToUser: firestoreAction((context) => {
      // context contains all original properties like commit, state, etc
      // and adds `bindFirestoreRef` and `unbindFirestoreRef`
      // we return the promise returned by `bindFirestoreRef` that will
      // resolve once data is ready
      return context.bindFirestoreRef(
        "user",
        db.collection("users").doc(context.getters.firebaseUser.uid)
      );
    }),
    createUser(context, data) {
      const uid = data.uid;
      const userData = {
        name: data?.name ?? "",
        email: data?.email ?? "",
        join_date: Number(new Date()),
        avatar: data?.avatar ?? "",
        rating: 0,
        role: UserRole.User,
        type: UserType.User,
        plan: UserPlan.Free,
      } as User;

      if (uid) {
        db.collection("users")
          .doc(uid)
          .get()
          .then((user) => {
            if (!user.exists) {
              db.collection("users").doc(uid).set(userData);
              console.log(`Created user ${uid} with data`, userData);
            }
          });
      }
    },
    updateUser(context, data) {
      const uid = context.getters.firebaseUser.uid;
      if (uid) {
        db.collection("users").doc(uid).update(data);
        console.log(`Updated user ${uid} with data`, data);
      }
    },
  },
  modules: {},
}) as Store<any>;
