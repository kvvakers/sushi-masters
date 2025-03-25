<script setup>
import { ref } from "vue";
import InputComponent from "@/components/shared/InputComponent.vue";
import ButtonComponent from "@/components/shared/ButtonComponent.vue";
import { register } from "@/api/auth";

const isAuth = ref(false);

const name = ref("");
const phone = ref("");
const passphrase = ref("");

const reg = () => {
  register({
    username: name.value,
    password: passphrase.value,
    phone: phone.value,
  });
};

const auth = () => {
  console.log(phone, passphrase);
};
</script>

<template>
  <div class="account">
    <h2 class="account__title">{{ isAuth ? "Увійти" : "Рєєстрація" }}</h2>
    <div>
      <InputComponent
        v-if="!isAuth"
        v-model="name"
        placeholder="Ім'я"
        name="Ім'я"
        class="account__input"
      />
      <InputComponent
        v-model="phone"
        placeholder="Телефон"
        name="Номер телефону"
        type="phone"
        class="account__input"
      />
      <InputComponent
        v-model="passphrase"
        placeholder="Пароль"
        name="Пароль"
        type="password"
        class="account__input"
      />
    </div>

    <div>
      <ButtonComponent
        @click-hoisting="() => (isAuth ? auth() : reg())"
        class="account__button _red"
        >{{ isAuth ? "Увійти" : "Рєєстрація" }}</ButtonComponent
      >
      <ButtonComponent @click-hoisting="isAuth = !isAuth" class="account__button">{{
        isAuth ? "Рєєстрація" : "Увійти"
      }}</ButtonComponent>
    </div>
  </div>
</template>

<style lang="scss">
.account {
  max-width: 600px;
  margin: 72px auto;
  padding: 24px 42px;
  background-color: #fefefe;

  &__title {
    text-align: center;
    font-size: 2rem;
    color: var(--color-red);
    font-weight: 600;
  }
  &__input {
    label {
      display: block;
      margin-bottom: 8px;
    }
    input {
      border: 1px solid #c4bdbd;
      border-radius: 5px;
      padding: 6px 16px;
      width: 100%;
      margin-bottom: 18px;
    }
  }
  &__button {
    background-color: #fff;
    border: 1px solid var(--color-red);
    border-radius: 5px;
    color: var(--color-red);
    padding: 6px 16px;
    width: 100%;
    margin-bottom: 8px;

    &._red {
      background-color: var(--color-red);
      color: #fff;
    }
  }
}
</style>
