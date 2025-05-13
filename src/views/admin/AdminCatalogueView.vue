<script setup>
import "@/assets/styles/CatalogueView.scss";
import CatalogueItem from "@/components/CatalogueItem.vue";
import ItemsNotExists from "@/components/ItemsNotExists.vue";
import { RouteName } from "@/constants/RouteName";
import { useGoodsStore } from "@/stores/goods";

const goodsStore = useGoodsStore();
</script>

<template>
  <div class="catalogue _section">
    <div class="catalogue__container _container">
      <ul
        v-if="goodsStore.goods.length > 0"
        class="catalogue__list _grid _g-template-cols-3 _gap-x-16"
      >
          <CatalogueItem v-for="(item, index) in goodsStore.goods" :key="index" :item="item" :is-admin="true" class="catalogue__item" />
      </ul>
      <ItemsNotExists v-else />
      <RouterLink
        :to="{ name: RouteName.ADMIN_EDITING, params: { id: 0 } }"
        class="item-catalogue__add _button"
      >
        {{ $t("add-good") }}
      </RouterLink>
    </div>
  </div>
</template>
