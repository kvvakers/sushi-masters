<script setup>
const emits = defineEmits(["clickHoisting"]);
const emitClick = (e) => {
  emits("clickHoisting", e);
};
</script>

<template>
  <button @click="emitClick"><slot></slot></button>
</template>
