<template>
  <form @submit.prevent="updateUser" class="user-edit global-card">
    <div class="title">Настройки</div>
    <AppInput
      label="Имя пользователя"
      v-model="name"
      name="name"
      type="text"
      autocomplete="full-name"
    />
    <AppInput label="Аватар" v-model="avatar" name="avatar" type="file" />
    <AppButton class="button" type="submit">Обновить профиль</AppButton>
  </form>
</template>

<script>
import { defineComponent } from "vue";
import AppInput from "../../../components/AppInput";
import AppButton from "../../../components/AppButton";

export default defineComponent({
  name: "UserEdit",
  components: { AppButton, AppInput },
  data() {
    return {
      name: "",
      avatar: "",
    };
  },
  methods: {
    updateUser() {
      this.$store.dispatch("updateUser", {
        name: this.name,
        avatar: this.avatar,
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.user-edit {
  display: block;
}

.title {
  font-size: 24px;
  margin-bottom: 24px;
}

.button {
  margin-top: 24px;
}
</style>
