<script setup>
import "@/assets/styles/CatalogueView.scss";
import { getUrlFromPath } from "@/utils/url.js";
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
        <li
          v-for="(item, index) in goodsStore.goods"
          :key="index"
          class="catalogue__item item-catalogue"
        >
          <div class="item-catalogue__image _image">
            <img :src="getUrlFromPath(item.image)" alt="" />
          </div>
          <div class="item-catalogue__description _flex _f-dir-col _gap-y-16">
            <div class="item-catalogue__border _flex _jc-sb _ai-c _gap-x-8">
              <div class="item-catalogue__title">{{ item.name }}</div>
              <div class="item-catalogue__weight">{{ item.weight }}г</div>
            </div>
            <div class="item-catalogue__ingridients">
              {{ item.ingredients }}
            </div>
            <div class="_flex _jc-sb _ai_c _gap-x-8">
              <div class="item-catalogue__price">{{ `${item.price}грн` }}</div>
              <RouterLink
                :to="{ name: 'catalogue-editing', params: { id: item.id } }"
                class="item-catalogue__buy _button-alt"
              >
                РЕДАГУВАТИ
              </RouterLink>
            </div>
          </div>
        </li>
      </ul>
      <div v-else class="catalogue__not-exists _title">Goods don't exist yet &#128530;</div>
      <RouterLink
        :to="{ name: 'catalogue-editing', params: { id: 0 } }"
        class="item-catalogue__add _button"
      >
        Додати товар
      </RouterLink>
    </div>
  </div>
</template>
