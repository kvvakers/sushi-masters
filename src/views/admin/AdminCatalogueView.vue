<script setup>
import "@/assets/styles/CatalogueView.scss";
import { goods } from "@/mock/goods.js";

const getUrlFromPath = (path) => {
  return new URL(path, import.meta.url).href;
};
</script>

<template>
  <div class="catalogue">
    <div class="catalogue__container _container">
      <h2 class="catalogue__title"></h2>
      <ul class="catalogue__list _grid _g-template-cols-3 _gap-x-16">
        <li v-for="(item, index) in goods" :key="index" class="catalogue__item item-catalogue">
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
        <!-- <li v-for="(item, index) in goods" :key="index">{{ item }}</li> -->
      </ul>
    </div>
  </div>
</template>
