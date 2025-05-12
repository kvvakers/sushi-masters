<script setup>
import ButtonComponent from "@/components/shared/ButtonComponent.vue";
import { NotificationType } from "@/constants/NotificationType";
import { useCartStore } from "@/stores/cart";
import { notify } from "@/utils/notify";
import { getUrlFromPath } from "@/utils/url";
import { computed } from "vue";

const props = defineProps({
  item: {
    required: true,
  },
  isAdmin: {
    default: false,
  }
});

const cartStore = useCartStore();

const isInCart = computed(() => {
  return cartStore.exists(props.item.id);
})

const addToCart = (id) => {
  cartStore.addToCart(id)
    .then(() => notify("Cart updated successfully! 🛒", NotificationType.SUCCESS))
    .catch(() => notify("Something went wrong! 😒", NotificationType.ERROR));
}

</script>

<template>
  <li class="item-catalogue">
    <div class="item-catalogue__image _image">
      <img :src="getUrlFromPath(item.image)" alt="Loading issue" />
    </div>
    <div class="item-catalogue__description _flex _f-dir-col _gap-y-16">
      <div class="item-catalogue__border _flex _jc-sb _ai-c _gap-x-8">
        <div class="item-catalogue__title">{{ item.name }}</div>
        <div class="item-catalogue__weight">{{ item.weight }}</div>
      </div>
      <div class="item-catalogue__ingridients">
        {{ item.ingridients }}
      </div>
      <div class="_flex _jc-sb _ai_c _gap-x-8">
        <div class="item-catalogue__price">{{ item.price }}грн</div>
        <template v-if="isAdmin">
          <RouterLink :to="{ name: 'catalogue-editing', params: { id: item.id } }"
            class="item-catalogue__buy _button-alt">
            {{ $t("edit") }}
          </RouterLink>
        </template>
        <template v-else>
          <ButtonComponent
            @click="addToCart(item.id)"
            :disabled="isInCart"
            :class="['item-catalogue__buy', isInCart ? '_button' : '_button-alt']"
          >
            {{ isInCart ? $t("already-in-cart") : $t("add-to-cart") }}
          </ButtonComponent>
        </template>
      </div>
    </div>
  </li>
</template>

<style lang="scss">
.item-catalogue {
  background-color: #e6e6e6;

  &__image {
    height: 400px;
    overflow: hidden;

    img {
      object-fit: cover;
    }
  }

  &__description {
    padding: 26px 20px;
  }

  &__ingridients {
    color: #7b7c85;
    font-size: 1rem;
  }

  &__border {
    padding-bottom: 12px;
    border-bottom: 1px solid #fff;
  }

  &__title {
    font-size: 1.3rem;
    text-transform: uppercase;
    font-weight: 300;
  }

  &__weight {
    color: #818181;
    font-size: 1rem;
  }

  &__price {
    font-size: 1.3rem;
    color: #595959;
  }

  &__buy {
    text-transform: uppercase;
    flex: 0 0 200px;
    border-radius: 10px;
  }

  &__add {
    font-weight: 500;
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 150px;
    padding-top: 24px;
    padding-bottom: 24px;
  }
}
</style>
