<template>
  <div class="login-popup">
    <div class="title">Вход / Регистрация</div>
    <form @submit.prevent="logInWithEmail" class="inputs">
      <AppInput
        type="email"
        autocomplete="email"
        name="email"
        v-model="email"
        label="Email"
      />
      <AppInput
        type="password"
        autocomplete="current-password"
        name="password"
        v-model="password"
        label="Пароль"
      />
      <AppButton class="button" type="submit">Вход / Регистрация</AppButton>
    </form>
    <div class="socials">
      <button class="social-button" type="button" @click="logInWithGoogle">
        <img src="~@/assets/icons/google.svg" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppInput from "@/components/AppInput.vue";
import AppButton from "@/components/AppButton.vue";

export default defineComponent({
  name: "LoginPopup",
  components: { AppButton, AppInput },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    logInWithEmail() {
      this.$firebaseApp
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);

          if (errorCode === "auth/user-not-found") {
            this.$firebaseApp
              .auth()
              .createUserWithEmailAndPassword(this.email, this.password)
              .then((userCredential) => {
                console.log(userCredential);
              });
          }
        });
    },
    logInWithGoogle() {
      const provider = new this.$firebase.auth.GoogleAuthProvider();
      this.$firebaseApp.auth().languageCode = "ru";
      this.$firebaseApp
        .auth()
        .signInWithPopup(provider)
        .then((userCredential) => {
          console.log(userCredential);

          if (userCredential.additionalUserInfo?.isNewUser) {
            this.$store.dispatch("createUser", {
              uid: userCredential?.user?.uid ?? null,
              // @ts-ignore:next-line
              name: userCredential.additionalUserInfo?.profile?.name ?? "",
              // @ts-ignore:next-line
              email: userCredential.additionalUserInfo?.profile?.email ?? "",
              // @ts-ignore:next-line
              avatar: userCredential.additionalUserInfo?.profile?.picture ?? "",
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
</script>

<style lang="scss" scoped>
.login-popup {
  width: 250px;
  background: white;
  padding: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  .title {
    font-size: 14px;
    font-weight: bold;
    text-align: left;
    margin-bottom: 16px;
  }

  .button {
    margin-top: 16px;
    width: 100%;
  }
}
</style>
