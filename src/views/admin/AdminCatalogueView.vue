<script setup>
import "@/assets/styles/CatalogueView.scss";
import CatalogueItem from "@/components/CatalogueItem.vue";
import { useGoodsStore } from "@/stores/goods";
import { onMounted } from "vue";

const goodsStore = useGoodsStore();

onMounted(() => {
  goodsStore.fetchGoods();
  goodsStore.fetchCategories();
});
</script>

<template>
  <div class="catalogue">
    <div class="catalogue__container _container">
      <ul
        v-if="goodsStore.goods.length > 0"
        class="catalogue__list _grid _g-template-cols-3 _gap-x-16"
      >
          <CatalogueItem v-for="(item, index) in goodsStore.goods" :key="index" :item="item" :is-admin="true" class="catalogue__item" />
      </ul>
      <div v-else class="catalogue__not-exists _title">Товарів не існує! &#128530;</div>
      <RouterLink
        :to="{ name: 'catalogue-editing', params: { id: 0 } }"
        class="item-catalogue__add _button"
      >
        Додати товар
      </RouterLink>
    </div>
  </div>
</template>
