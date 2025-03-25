<script setup>
import LayoutDefault from "@/layouts/LayoutDefault.vue";
</script>

<template>
  <LayoutDefault>
    <div class="cart">
      <div class="cart__container _container">
        <h2 class="cart__title">Кошик</h2>
        <ul class="cart__list"></ul>
        <div class="cart__summary">
          <span>Разом:</span>
          <span></span>
        </div>
      </div>
    </div>
  </LayoutDefault>
</template>
