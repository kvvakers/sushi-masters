<script setup>
import ItemsNotExists from "@/components/ItemsNotExists.vue";
import ButtonComponent from "@/components/shared/ButtonComponent.vue";
import CounterComponent from "@/components/shared/CounterComponent.vue";
import { useCartStore } from "@/stores/cart";
import { onMounted } from "vue";
import { debounce } from "@/utils/debouce";

const cartStore = useCartStore();

const debouncedAddToCart = debounce((sushiId, quantity) => {
  cartStore.addToCart(sushiId, quantity);
});

const handleCounterChange = (sushiId, quantity) => {
  if (quantity < 0) return;

  if (quantity === 0) {
    debouncedAddToCart.cancel();
    cartStore.deleteItem(sushiId);
    return;
  }

  debouncedAddToCart(sushiId, quantity);
};

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
          <li v-for="item in cartStore.cartList" :key="item.sushiId" class="_flex _ai-c _jc-sb _gap-x-32">
            <div class="cart__image _image">
              <img :src="item.image" alt="">
            </div>
            <div class="cart__info _flex _f-dir-col _gap-y-8">
              <h3>{{ item.name }}</h3>
              <div>{{ item.price }} грн</div>
              <div>{{ item.weight }}</div>
            </div>
            <div class="cart__actions _flex _ai-c _gap-x-16">
              <CounterComponent v-model="item.quantity"
                @change="(quantity) => handleCounterChange(item.sushiId, quantity)" />
              <ButtonComponent @click-hoisting="cartStore.deleteItem(item.sushiId)" class="cart__delete _button-alt">
                <span>{{ $t("delete") }}</span>
                <i class="material-icons">delete</i>
              </ButtonComponent>
            </div>
          </li>
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
      font-weight: 600;
    }
  }

  &__delete {
    display: flex;
    align-items: center;
    column-gap: 8px;

    i {
      font-size: 1.25rem;
    }

    span {
      font-weight: 600;
    }
  }
}
</style>
