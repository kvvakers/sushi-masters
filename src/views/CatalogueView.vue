<script setup>
import LayoutDefault from "@/layouts/LayoutDefault.vue";
import ButtonComponent from "@/components/shared/ButtonComponent.vue";
import { onMounted, ref } from "vue";

import { getGoods } from "@/api/goods";

const goods = ref([]);

const getGoodsFromAPI = () => {
  getGoods()
    .then((res) => {
      console.log(res);
      goods.value = res.data;
    })
    .catch((err) => {
      console.log("CatalogueView error", err);
    });
};

onMounted(() => {
  getGoodsFromAPI();
});
</script>

<template>
  <LayoutDefault>
    <div class="catalogue">
      <div class="catalogue__container _container">
        <h2 class="catalogue__title"></h2>
        <ul class="catalogue__list _grid _g-template-cols-3 _gap-x-16">
          <li class="catalogue__item item-catalogue">
            <div class="item-catalogue__image _image">
              <img src="../assets/img/sushi_test.png" alt="" />
            </div>
            <div class="item-catalogue__description _flex _f-dir-col _gap-y-16">
              <div class="item-catalogue__border _flex _jc-sb _ai-c _gap-x-8">
                <div class="item-catalogue__title">СЕТ ЛОСОСЕВИЙ БУМ</div>
                <div class="item-catalogue__weight">1100г</div>
              </div>
              <div class="item-catalogue__ingridients">
                Філадельфія дует, Каліфорнія з лососем в кунжуті
              </div>
              <div class="_flex _jc-sb _ai_c _gap-x-8">
                <div class="item-catalogue__price">900грн</div>
                <ButtonComponent class="item-catalogue__buy _button">В КОШИК</ButtonComponent>
              </div>
            </div>
          </li>
          <li v-for="(item, index) in goods" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>
  </LayoutDefault>
</template>

<style lang="scss">
.catalogue__item {
  border-radius: 15px;
  overflow: hidden;
}
.item-catalogue {
  &__description {
    background-color: #e6e6e6;
    padding: 12px;
  }
  &__ingridients {
    color: #7b7c85;
    font-size: 1rem;
  }
  &__border {
    border-bottom: 1px solid #fff;
  }
  &__title {
    font-size: 1.7rem;
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
}
</style>
