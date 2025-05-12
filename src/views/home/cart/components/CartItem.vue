<script setup>
import ButtonComponent from "@/components/shared/ButtonComponent.vue";
import CounterComponent from "@/components/shared/CounterComponent.vue";
import { debounce } from "@/utils/debouce";

const { store } = defineProps({
  store: {
    type: Object,
    required: true,
  },
  item: {
    type: Object,
    required: true,
  },
})

const debouncedAddToCart = debounce((sushiId, quantity) => {
  store.addToCart(sushiId, quantity);
});

const handleCounterChange = (sushiId, quantity) => {
  if (quantity < 0) return;

  if (quantity === 0) {
    debouncedAddToCart.cancel();
    store.deleteItem(sushiId);
    return;
  }

  debouncedAddToCart(sushiId, quantity);
};
</script>

<template>
  <li v-for="item in store.cartList" :key="item.sushiId" class="item-cart _flex _ai-c _jc-sb _gap-x-32">
    <div class="item-cart__image _image">
      <img :src="item.image" alt="">
    </div>
    <div class="item-cart__info _flex _f-dir-col _gap-y-8">
      <h3>{{ item.name }}</h3>
      <div>{{ item.price }} грн</div>
      <div>{{ item.weight }}</div>
    </div>
    <div class="item-cart__actions _flex _ai-c _gap-x-16">
      <CounterComponent v-model="item.quantity" @change="(quantity) => handleCounterChange(item.sushiId, quantity)" />
      <ButtonComponent @click-hoisting="store.deleteItem(item.sushiId)" class="item-cart__delete _button-alt">
        <span>{{ $t("delete") }}</span>
        <i class="material-icons">delete</i>
      </ButtonComponent>
    </div>
  </li>
</template>
<style lang="scss">
.item-cart {
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
