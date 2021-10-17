<template>
  <div class="header">
    <div class="container">
      <div class="left">
        <router-link to="/" class="logo">
          <img src="~@/assets/icons/logo.svg" />
        </router-link>
      </div>

      <div class="right">
        <template v-if="!firebaseUser">
          <AppButton type="button" @click="showLoginPopup = !showLoginPopup">
            Войти
          </AppButton>
          <LoginPopup v-if="showLoginPopup" class="login-popup" />
        </template>

        <template v-else>
          <div class="user">
            <div class="avatar"></div>
            <div class="name" v-if="user?.name">{{ user.name }}</div>
          </div>
          <router-link :to="`/user/${firebaseUser.uid}`">Профиль</router-link>
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
    ...mapGetters(["firebaseUser", "user"]),
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
  height: 70px;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
}

.logo {
  img {
    display: block;
  }
}

.right {
  position: relative;
  display: flex;
  align-items: center;
  gap: 24px;
}

.user {
  display: flex;
  align-items: center;

  .name {
    font-weight: 600;
  }

  .avatar {
    width: 32px;
    height: 32px;
    background: #eee;
    border-radius: 5px;
    margin-right: 16px;
  }
}

.login-popup {
  position: absolute;
  right: 0;
  top: 100%;
  margin-top: 16px;
}
</style>
