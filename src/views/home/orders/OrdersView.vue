<script setup>
import { onMounted, ref } from 'vue';
import OrderPreview from './order/components/OrderPreview.vue';
import { getOrderList } from '@/api/order/order';
import ItemsNotExists from '@/components/ItemsNotExists.vue';

const orders = ref([]);

onMounted(() => {
  getOrderList()
    .then(res => {
      orders.value = res.data;
    })
})
</script>

<template>
  <div class="orders _section">
    <div class="orders__container _container">
      <h2 class="orders__title _title">{{ $t("my-orders") }}</h2>
      <div v-if="orders.length > 0" class="orders__list">
        <div v-for="order in orders" :key="order.id" class="orders__item">
          <h3 class="orders__subtitle">{{ $t("order-id") + ": " + order.id }}</h3>
          <OrderPreview :items="order.items" :total="order.totalAmount" />
        </div>
      </div>
      <ItemsNotExists v-else />
    </div>
  </div>
</template>

<style>
.orders__item {
  margin-top: 48px;
}
.orders__subtitle {
  max-width: 640px;
  margin: 0 auto 8px;
  font-size: 1.25rem;
  font-weight: 600;
}
</style>
