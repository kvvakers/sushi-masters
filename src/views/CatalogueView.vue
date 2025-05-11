<script setup>
import LayoutDefault from "@/layouts/LayoutDefault.vue";
import ButtonComponent from "@/components/shared/ButtonComponent.vue";
import { onMounted } from "vue";
import { getUrlFromPath } from "@/utils/url";
import { useGoodsStore } from "@/stores/goods";
import "@/assets/styles/CatalogueView.scss";

const goodsStore = useGoodsStore();

onMounted(() => {
  goodsStore.fetchGoods();
  goodsStore.fetchCategories();
});
</script>

<template>
  <LayoutDefault>
    <div class="catalogue">
      <div class="catalogue__container _container" v-if="goodsStore.goods === undefined">
        <h2 class="catalogue__title">Каталог</h2>
        <ul class="catalogue__list _grid _g-template-cols-3 _gap-x-16">
          <li
            class="catalogue__item item-catalogue"
            v-for="(item, index) in goodsStore.goods"
            :key="index"
          >
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
                <ButtonComponent class="item-catalogue__buy _button-alt">В КОШИК</ButtonComponent>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="catalogue__container _container" v-else>
        <div class="catalogue__title _title">Товарів не існує! &#128530;</div>
      </div>
    </div>
  </LayoutDefault>
</template>

<style>
.catalogue {
  padding: 60px 0;
}
</style>
