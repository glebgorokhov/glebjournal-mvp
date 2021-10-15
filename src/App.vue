<template>
  <Header />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header";

export default defineComponent({
  components: { Header },
  beforeCreate() {
    this.$firebaseApp.auth().onAuthStateChanged((user) => {
      this.$store.commit("setFirebaseUser", user);
    });
  },
});
</script>

<style lang="scss">
@import "@/styles";
</style>
