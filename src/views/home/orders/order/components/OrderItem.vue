<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <li class="item-payment _flex _ai-c _jc-sb _gap-x-32">
    <div class="item-payment__image _image">
      <img :src="item.image" alt="">
    </div>
    <div class="item-payment__info _flex _f-dir-col _gap-y-8">
      <h3>{{ item.name }}</h3>
      <div>
        <span>{{ item.quantity }}шт</span>
        x
        <span>{{ item.price }}грн</span>
      </div>
      <div>{{ item.weight }}</div>
    </div>
  </li>
</template>
<style lang="scss">
.item-payment {
  &__image {
    flex: 0 0 100px;
    height: 100px;

    img {
      object-fit: cover;
    }
  }

  &__info {
    flex: 1 1 auto;

    h3, span {
      font-size: 1rem;
      font-weight: 600;
    }
  }
}
</style>
