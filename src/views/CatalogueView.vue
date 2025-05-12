<script setup>
import LayoutDefault from "@/layouts/LayoutDefault.vue";
import { onMounted } from "vue";
import { useGoodsStore } from "@/stores/goods";
import { useCartStore } from "@/stores/cart";
import "@/assets/styles/CatalogueView.scss";
import CatalogueItem from "@/components/CatalogueItem.vue";
import ItemsNotExists from "@/components/ItemsNotExists.vue";

const goodsStore = useGoodsStore();
const cartStore = useCartStore();

onMounted(() => {
  goodsStore.fetchGoods();
  goodsStore.fetchCategories();
  cartStore.fetchCart();
});
</script>

<template>
  <LayoutDefault>
    <div class="catalogue _section">
      <div class="catalogue__container _container">
        <h2 class="catalogue__title _title">{{ $t("catalogue") }}</h2>
        <ul v-if="goodsStore.goods.length > 0" class="catalogue__list _grid _g-template-cols-3 _gap-x-16">
          <CatalogueItem v-for="(item, index) in goodsStore.goods" :key="index" :item="item" class="catalogue__item" />
        </ul>
        <ItemsNotExists v-else />
      </div>
    </div>
  </LayoutDefault>
</template>

<style>
</style>
