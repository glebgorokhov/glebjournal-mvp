<template>
  <div class="app-input">
    <div v-if="label" class="label">{{ label }}</div>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="input"
      :type="type"
      :name="name"
      :autocomplete="autocomplete"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppInput",
  props: {
    modelValue: {
      type: String,
    },
    label: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
    autocomplete: {
      type: String,
    },
    name: {
      type: String,
    },
  },
});
</script>

<style lang="scss" scoped>
.app-input {
  display: block;

  & + & {
    margin-top: 16px;
  }
}

.input {
  width: 100%;
  display: block;
  background: white;
  border: 1px solid lightgrey;
  border-radius: 5px;
  height: 40px;
  padding: 0 10px;
  outline: none;
  font-size: 14px;
}

.label {
  font-size: 12px;
  margin-bottom: 4px;
  color: grey;
  text-align: left;
}
</style>
