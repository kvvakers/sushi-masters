<script setup>
import ItemsNotExists from "@/components/ItemsNotExists.vue";
import LayoutDefault from "@/layouts/LayoutDefault.vue";
import { useCartStore } from "@/stores/cart";
import { onMounted } from "vue";

const cartStore = useCartStore();

onMounted(() => {
  cartStore.fetchCart();
})
</script>

<template>
  <LayoutDefault>
    <div class="cart _section">
      <div class="cart__container _container">
        <h2 class="cart__title _title">Кошик</h2>
        <template v-if="cartStore.cartList.length > 0">
          <ul class="cart__list">
            <li v-for="item in cartStore.cartList" :key="item.item.sushiId">{{ item.item.sushiId }}</li>
          </ul>
          <div class="cart__summary">
            <span>Разом:</span>
            <span></span>
          </div>
        </template>
        <ItemsNotExists v-else />
      </div>
    </div>
  </LayoutDefault>
</template>
