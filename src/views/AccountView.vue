<script setup>
import { ref } from "vue";
import InputComponent from "@/components/shared/InputComponent.vue";
import ButtonComponent from "@/components/shared/ButtonComponent.vue";

const isAuth = ref(false);

const name = ref("");
const email = ref("");
const password = ref("");

const reg = () => {
  console.log(1);
};

const auth = () => {
  console.log(2);
};
</script>

<template>
  <h2>{{ isAuth ? "Увійти" : "Рєєстрація" }}</h2>
  <div>
    <InputComponent v-model="name" />
    <InputComponent v-model="email" />
    <InputComponent v-model="password" />
  </div>

  <div>
    <ButtonComponent @click-hoisting="() => (isAuth ? auth() : reg())">{{
      isAuth ? "Увійти" : "Рєєстрація"
    }}</ButtonComponent>
    <ButtonComponent @click-hoisting="isAuth = !isAuth">{{
      isAuth ? "Рєєстрація" : "Увійти"
    }}</ButtonComponent>
  </div>
</template>
