<script setup></script>

<template>
  <div class="logout">
    <h2 class="logout__title">{{ $t("sign-out-confirm") }} &#128530;</h2>
    <div class="logout__actions">
      <router-link :to="{ name: 'catalogue' }" class="logout__button _button">Головна</router-link>
      <router-link :to="{ name: 'account' }" class="logout__button _button-alt">Вийти</router-link>
    </div>
  </div>
</template>
<style lang="scss">
.logout {
  max-width: 600px;
  margin: 72px auto;
  padding: 36px 42px;
  background-color: #fefefe;

  &__title {
    text-align: center;
    font-size: 2rem;
    color: var(--color-red);
    font-weight: 600;
    margin-bottom: 24px;
  }
  &__actions {
    a:not(:last-child) {
      margin-bottom: 12px;
    }
  }
}
</style>
