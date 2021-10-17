<template>
  <n-config-provider :date-locale="dateRuRU" :locale="ruRU">
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
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import { ruRU, dateRuRU, NConfigProvider } from "naive-ui";

export default defineComponent({
  components: { Header, NConfigProvider },
  created() {
    this.$firebaseApp.auth().onAuthStateChanged((user) => {
      this.$store.commit("setFirebaseUser", user);

      if (user) {
        this.$store.dispatch("subscribeToUser");
      }
    });
  },
  data() {
    return {
      ruRU,
      dateRuRU,
    };
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
