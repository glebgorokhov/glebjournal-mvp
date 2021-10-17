<template>
  <div class="home">Главная страница</div>
  <NButton text="hello" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NButton } from "naive-ui";

export default defineComponent({
  name: "Home",
  components: {
    NButton,
  },
});
</script>
