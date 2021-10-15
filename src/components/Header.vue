<template>
  <div class="header">
    <div class="container">
      <div class="left">
        <div class="logo">ГJ</div>
      </div>

      <div class="right">
        <template v-if="!firebaseUser">
          <AppButton type="button" @click="showLoginPopup = !showLoginPopup">
            Войти
          </AppButton>
          <LoginPopup v-if="showLoginPopup" class="login-popup" />
        </template>

        <template v-else>
          <div>User Name</div>
          <AppButton type="button" @click="signOut">Выйти</AppButton>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginPopup from "@/components/LoginPopup.vue";
import { mapGetters } from "vuex";
import AppButton from "@/components/AppButton.vue";

export default defineComponent({
  name: "Header",
  components: { AppButton, LoginPopup },
  data() {
    return {
      showLoginPopup: false,
    };
  },
  computed: {
    ...mapGetters(["firebaseUser"]),
  },
  methods: {
    signOut() {
      this.$firebaseApp.auth().signOut();
    },
  },
});
</script>

<style lang="scss" scoped>
.header {
  padding: 20px 0;
  background: white;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.right {
  position: relative;
}

.login-popup {
  position: absolute;
  right: 0;
  top: 100%;
  margin-top: 16px;
}
</style>
