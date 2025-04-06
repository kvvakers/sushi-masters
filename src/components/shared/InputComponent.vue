<script setup>
const value = defineModel({
  required: true,
});
defineProps({
  name: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  errors: {
    type: Array,
    default: () => [],
  },
  error: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div>
    <div>
      <label v-if="name.length > 0" :for="name">{{ name }}</label>
      <input v-model="value" :id="name" :type="type" :placeholder="placeholder" />
    </div>
    <ul v-if="errors.length > 0">
      <li v-for="(item, index) in errors" :key="index">{{ item }}</li>
    </ul>
    <ul v-if="error">
      <li>{{ error }}</li>
    </ul>
  </div>
</template>
