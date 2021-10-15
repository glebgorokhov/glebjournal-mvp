<template>
  <Header />
  <div class="row">
    <div class="left container">
      <div class="left-content">
        <router-view />
      </div>
    </div>
    <div class="right container">
      <div>Комментарии</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";

export default defineComponent({
  components: { Header },
  created() {
    this.$firebaseApp.auth().onAuthStateChanged((user) => {
      this.$store.commit("setFirebaseUser", user);

      if (user) {
        this.$store.dispatch("subscribeToUser");
      }
    });
  },
});
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  padding: 28px 0;
}

.left {
  flex-grow: 1;
}

.right {
  width: 350px;
  flex-shrink: 0;
  margin-left: 60px;
  border-left: 1px solid rgba(black, 0.1);
}

.left-content {
  max-width: 700px;
  margin: 0 auto;
}
</style>
