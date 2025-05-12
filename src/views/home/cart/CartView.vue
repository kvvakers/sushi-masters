<script setup>
import ItemsNotExists from "@/components/ItemsNotExists.vue";
import { useCartStore } from "@/stores/cart";
import { onMounted } from "vue";
import CartItem from "./components/CartItem.vue";

const cartStore = useCartStore();

onMounted(() => {
  cartStore.fetchCart();
})
</script>

<template>
  <div class="cart _section">
    <div class="cart__container _container">
      <h2 class="cart__title _title">{{ $t("cart") }}</h2>
      <template v-if="cartStore.cartList.length > 0">
        <ul class="cart__list _flex _f-dir-col _gap-y-32">
          <CartItem :store="cartStore" class="cart__item"/>
        </ul>
        <div class="cart__summary _flex _ai-c _jc-sb _gap-x-32">
          <span>{{ $t("total") }}:</span>
          <span>{{ cartStore.total }} грн</span>
        </div>
        <div class="cart__payment _flex _ai-c _jc-sb _gap-x-32">
          <RouterLink :to="{ name: 'payment' }" class="_button-alt">
            <div class="_flex _ai-c _jc-c _gap-x-8">
              <i class="material-icons basket">savings</i>
              <span>{{ $t("go-to-payment") }}</span>
            </div>
          </RouterLink>
        </div>
      </template>
      <ItemsNotExists v-else />
    </div>
  </div>
</template>

<style lang="scss">
.cart {

  &__list,
  &__summary {
    max-width: 1024px;
    margin: 0 auto;
  }

  &__payment {
    max-width: 400px;
    margin: 0 auto;
    padding: 32px 0;
  }

  &__summary {
    border-top: 1px solid #c0c0c0;
    padding: 32px 0;
    margin-top: 32px;
    font-size: 1.5rem;
    font-weight: 700;
  }
}
</style>
