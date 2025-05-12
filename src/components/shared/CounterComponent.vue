<script setup>
import ButtonComponent from './ButtonComponent.vue';

const modelValue = defineModel({
  required: true,
});

defineProps({
  step: {
    default: 1,
  }
});

const emits = defineEmits(["change"]);

const handle = (value) => {
  modelValue.value += value;
}
</script>

<template>
  <ButtonComponent @click-hoisting="handle(-step)">-</ButtonComponent>
  <span>{{ modelValue }}</span>
  <ButtonComponent @click-hoisting="handle(step)">+</ButtonComponent>
</template>
