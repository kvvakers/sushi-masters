<script setup>
import ButtonComponent from "@/components/shared/ButtonComponent.vue";
import "@/assets/styles/CatalogueView.scss";
</script>

<template>
  <div class="catalogue">
    <div class="catalogue__container _container">
      <h2 class="catalogue__title"></h2>
      <ul class="catalogue__list _grid _g-template-cols-3 _gap-x-16">
        <li class="catalogue__item item-catalogue">
          <div class="item-catalogue__image _image">
            <img src="@/assets/img/sushi_test.png" alt="" />
          </div>
          <div class="item-catalogue__description _flex _f-dir-col _gap-y-16">
            <div class="item-catalogue__border _flex _jc-sb _ai-c _gap-x-8">
              <div class="item-catalogue__title">СЕТ ЛОСОСЕВИЙ БУМ</div>
              <div class="item-catalogue__weight">1100г</div>
            </div>
            <div class="item-catalogue__ingridients">
              Філадельфія дует (blow), Каліфорнія з лососем в кунжуті
            </div>
            <div class="_flex _jc-sb _ai_c _gap-x-8">
              <div class="item-catalogue__price">900грн</div>
              <ButtonComponent class="item-catalogue__buy _button-alt">В КОШИК</ButtonComponent>
            </div>
          </div>
        </li>
        <!-- <li v-for="(item, index) in goods" :key="index">{{ item }}</li> -->
      </ul>
    </div>
  </div>
</template>
