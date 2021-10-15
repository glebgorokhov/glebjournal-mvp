import { createStore } from "vuex";

export default createStore({
  state: {
    firebaseUser: null,
  },
  getters: {
    firebaseUser(state) {
      return state.firebaseUser;
    },
  },
  mutations: {
    setFirebaseUser(state, payload) {
      state.firebaseUser = payload;
      console.log("➝ state.firebaseUser", payload);
    },
  },
  actions: {},
  modules: {},
});
