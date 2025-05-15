<script setup>
import OrderItem from './OrderItem.vue';


defineProps({
  items: {
    type: Array,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  }
})
</script>

<template>
  <div class="preview-order _flex _f-dir-col _gap-y-32">
    <ul class="preview-order__list _flex _f-dir-col _gap-y-32">
      <OrderItem v-for="item in items" :key="item.sushiId" :item="item" class="preview-order__item"/>
    </ul>
    <div class="preview-order__summary _flex _ai-c _jc-sb _gap-x-32">
      <span>{{ $t("total") }}:</span>
      <span>{{ total }} грн</span>
    </div>
  </div>
</template>
<style lang="scss">
.preview-order {
  padding: 20px;
  background-color: #fff;
  border-radius: 20px;
  max-width: 640px;
  margin: 0 auto;
  &__summary {
    border-top: 1px solid #c0c0c0;
    padding: 16px 0 0;
    font-size: 1.5rem;
    font-weight: 700;
  }
}
</style>
