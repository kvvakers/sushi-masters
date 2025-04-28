<script setup>
import { RouterView } from "vue-router";

import { onMounted } from "vue";

onMounted(() => {
  console.log("App mounted");
});
</script>

<template>
  <RouterView />
</template>
