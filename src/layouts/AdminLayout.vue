<script setup>
import { useRoute } from "vue-router";
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

const route = useRoute();
</script>

<template>
  <header class="admin-header">
    <div class="admin-header__top top-admin-header">
      <div class="top-admin-header__container _container _flex _ai-c _jc-sb _gap-x-32">
        <router-link :to="{ name: 'admin-catalogue' }" class="top-admin-header__logo _image">
          <img src="@/assets/img/logo.svg" />
        </router-link>
        <div class="_flex _ai-c _gap-x-32">
          <router-link :to="{ name: 'catalogue' }" class="top-header__title">
            Головна
          </router-link>
          <h1 class="top-header__title">Adminka</h1>
        </div>
      </div>
    </div>
    <div v-if="route.name !== 'catalogue-editing'" class="admin-header__tabs tabs-admin-header">
      <div class="tabs-admin-header__container _container">
        <ul class="tabs-admin-header__items _flex _ai-c _jc-c _gap-x-16">
          <li v-for="(item, index) in tabs" :key="index" class="tabs-admin-header__item">
            <RouterLink :to="{ name: item.route }" active-class="_active" class="tabs-admin-header__link">
              {{ item.name }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <slot></slot>
</template>

<style lang="scss">
.top-admin-header {
  padding: 16px 0;
  border-bottom: 1px solid #e6e6e6;

  &__logo {
    flex: 0 0 200px;
  }
}

.tabs-admin-header {
  &__items {
    margin-top: 16px;
  }

  &__item {}

  &__link {
    padding: 0 32px 16px;
    transition: all 0.3s ease;
    border-bottom: 2px solid transparent;
    color: inherit;
    font-weight: 600;

    &._active {
      color: #3293ee;
      border-bottom: 2px solid #3293ee;
    }
  }
}
</style>
