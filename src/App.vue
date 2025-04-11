<script setup>
import { RouterView, useRouter } from "vue-router";
import { useUserStore } from "./stores/user";
import { onMounted } from "vue";

const userStore = useUserStore();
const router = useRouter();

onMounted(() => {
  console.log("App mounted");
  userStore.fetchUser().catch(() => {
    router.push({ name: "account" });
  });
});
</script>

<template>
  <RouterView />
</template>
