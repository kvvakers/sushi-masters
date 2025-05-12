<script setup>
import ItemsNotExists from "@/components/ItemsNotExists.vue";
import ButtonComponent from "@/components/shared/ButtonComponent.vue";
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
        <h2 class="cart__title _title">{{ $t("cart") }}</h2>
        <template v-if="cartStore.cartList.length > 0">
          <ul class="cart__list">
            <li v-for="item in cartStore.cartList" :key="item.sushiId" class="_flex _ai-c _jc-sb _gap-x-32">
              <div class="_image">
                <img :src="item.image" alt="">
              </div>
              <div style="flex: 1 1 100%">
                <h3>{{ item.name }}</h3>
                <div>{{ item.price }}</div>
              </div>
              <div>
                <ButtonComponent @click-hoisting="cartStore.deleteItem(item.sushiId)">
                  <i class="material-icons">delete</i>
                </ButtonComponent>
              </div>
            </li>
          </ul>
          <div class="cart__summary">
            <span>{{ $t("total") }}:</span>
            <span></span>
          </div>
        </template>
        <ItemsNotExists v-else />
      </div>
    </div>
  </LayoutDefault>
</template>
