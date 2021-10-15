<template>
  <div class="user" v-if="firebaseUser && user">
    <div class="info global-card">
      <div class="avatar"></div>
      <div class="name">{{ user?.name ?? "No Name" }}</div>
      <div class="joined" v-if="user.join_date">
        На сайте с {{ moment(user.join_date).format("DD.MM.YYYY") }}
      </div>
    </div>
    <div class="navigation global-card">
      <router-link :to="`/user/${firebaseUser.uid}`" class="navigation-link">
        Лента
      </router-link>
      <router-link
        v-if="firebaseUser.uid === pageId"
        :to="`/user/${firebaseUser.uid}/edit`"
        class="navigation-link"
      >
        Настройки
      </router-link>
    </div>
    <div class="page">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import moment from "moment";

export default defineComponent({
  name: "User",
  computed: {
    ...mapGetters(["firebaseUser", "user"]),
    pageId() {
      return this.$route.params.id;
    },
  },
  methods: {
    moment,
  },
});
</script>

<style lang="scss" scoped>
.user {
  display: block;
}

.avatar {
  width: 100px;
  height: 100px;
  background: #eee;
  border-radius: 5px;
  margin-bottom: 20px;
}

.name {
  font-size: 24px;
}

.navigation {
  display: flex;
  align-items: center;
  overflow: auto;
  gap: 24px;
  margin-top: 24px;
}

.page {
  margin-top: 24px;
}

.joined {
  font-size: 14px;
  color: grey;
  margin-top: 4px;
}
</style>
