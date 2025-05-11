<script setup>
import { RouterView } from "vue-router";

import { onMounted } from "vue";
import NotificationPopup from "./components/shared/NotificationPopup.vue";

onMounted(() => {
  console.log("App mounted");
});
</script>

<template>
  <RouterView />
  <NotificationPopup />
</template>
