<template>
  <component :is="tag" class="app-button"><slot /></component>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppButton",
  props: {
    tag: {
      type: String,
      default: "button",
    },
    full: {
      type: Boolean,
    },
  },
});
</script>

<style lang="scss" scoped>
.app-button {
  display: block;
  appearance: none;
  border: none;
  background: var(--color-main);
  color: white;
  border-radius: 5px;
  padding: 10px 16px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
}
</style>
