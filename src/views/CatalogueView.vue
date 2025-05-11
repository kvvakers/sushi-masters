<script setup>
import LayoutDefault from "@/layouts/LayoutDefault.vue";
import { onMounted } from "vue";
import { useGoodsStore } from "@/stores/goods";
import "@/assets/styles/CatalogueView.scss";
import CatalogueItem from "@/components/CatalogueItem.vue";

const goodsStore = useGoodsStore();

onMounted(() => {
  goodsStore.fetchGoods();
  goodsStore.fetchCategories();
});
</script>

<template>
  <LayoutDefault>
    <div class="catalogue">
      <div class="catalogue__container _container">
        <h2 class="catalogue__title _title">Каталог</h2>
        <ul class="catalogue__list _grid _g-template-cols-3 _gap-x-16">
          <CatalogueItem v-for="(item, index) in goodsStore.goods" :key="index" :item="item" class="catalogue__item" />
        </ul>
      </div>
    </div>
  </LayoutDefault>
</template>
