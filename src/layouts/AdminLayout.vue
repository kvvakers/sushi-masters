<script setup>
const tabs = [
  {
    name: "Catalogue",
    route: "admin-catalogue",
  },
  {
    name: "Orders",
    route: "admin-orders",
  },
];
</script>

<template>
  <header class="header">
    <div class="header__top top-header _flex _ai-c _jc-sb _gap-x-32">
      <div class="top-header__container _container">
        <div class="top-header__logo _image">
          <img src="@/assets/img/logo.png" />
        </div>
        <h1 class="top-header__title">Adminka</h1>
      </div>
    </div>
    <div class="header__tabs tabs-header">
      <div class="tabs-header__container _container">
        <ul class="tabs-header__items">
          <li v-for="(item, index) in tabs" :key="index" class="tabs-header__item">
            <RouterLink :to="{ name: item.route }">{{ item.name }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <slot></slot>
</template>

<style lang="scss">
.header {
  &__top {
  }
  &__tabs {
  }
}
.top-header {
  &__logo {
  }
  &__title {
  }
  &__container {
  }
}

.tabs-header {
  &__container {
  }
  &__items {
  }
  &__item {
  }
}
</style>
