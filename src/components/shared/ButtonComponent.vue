<script setup>

const props = defineProps({
  disabled: {
    default: false,
  }
})
const emits = defineEmits(["clickHoisting"]);
const emitClick = (e) => {
  if (props.disabled) return;
  emits("clickHoisting", e);
};
</script>

<template>
  <button @click="emitClick" :disabled="disabled"><slot></slot></button>
</template>
