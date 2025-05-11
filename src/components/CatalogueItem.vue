<script setup>
import ButtonComponent from "@/components/shared/ButtonComponent.vue";
import { getUrlFromPath } from "@/utils/url";

defineProps({
  item: {
    required: true,
  },
  isAdmin: {
    default: false,
  }
})

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
            РЕДАГУВАТИ
          </RouterLink>
        </template>
        <template v-else>
          <ButtonComponent class="item-catalogue__buy _button-alt">В КОШИК</ButtonComponent>
        </template>
      </div>
    </div>
  </li>
</template>
