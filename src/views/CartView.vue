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
          <ul class="cart__list _flex _f-dir-col _gap-y-32">
            <li v-for="item in cartStore.cartList" :key="item.sushiId" class="_flex _ai-c _jc-sb _gap-x-32">
              <div class="cart__image _image">
                <img :src="item.image" alt="">
              </div>
              <div class="cart__info">
                <h3>{{ item.name }}</h3>
                <div>{{ item.price }}грн</div>
              </div>
              <div class="cart__actions">

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

<style lang="scss">
.cart {
  &__list,
  &__summary {
    max-width: 1024px;
    margin: 0 auto;
  }
  &__image {
    flex: 0 0 160px;
    height: 160px;
    img {
      object-fit: cover;
    }
  }
  &__info {
    flex: 1 1 auto;
    h3 {
      font-size: 1.25rem;
    }
  }
}
</style>
