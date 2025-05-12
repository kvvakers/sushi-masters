<script setup>
import ButtonComponent from './ButtonComponent.vue';

const modelValue = defineModel({
  type: Number,
  required: true,
});

defineProps({
  step: {
    type: Number,
    default: 1,
  },
});

const emit = defineEmits(["change"]);

const count = (delta) => {
  const newValue = modelValue.value + delta;
  modelValue.value = newValue;
  emit("change", newValue);
};
</script>

<template>
  <div class="_flex _ai-c _gap-x-16">
    <ButtonComponent @click-hoisting="() => count(-step)" class="_button">-</ButtonComponent>
    <span style="font-size: 1rem; font-weight: 700;">{{ modelValue }}</span>
    <ButtonComponent @click-hoisting="() => count(step)" class="_button">+</ButtonComponent>
  </div>
</template>
