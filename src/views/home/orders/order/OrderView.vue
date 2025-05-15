<script setup>
import ButtonComponent from '@/components/shared/ButtonComponent.vue';
import OrderPreview from './components/OrderPreview.vue';
import { RouteName } from '@/constants/RouteName';
import { useCartStore } from '@/stores/cart';
import { onMounted, ref } from 'vue';
import { useForm } from "vee-validate";
import * as yup from "yup";
import InputComponent from '@/components/shared/InputComponent.vue';
import { useUserStore } from '@/stores/user';
import { postOrder } from '@/api/order/order';
import { notify } from '@/utils/notify';
import { NotificationType } from '@/constants/NotificationType';
import router from '@/router';

const cartStore = useCartStore();
const isFormVisible = ref(false);

const { defineField, errors, handleSubmit } = useForm({
  validationSchema: yup.object({
    customerName: yup
      .string()
      .required("Ім'я - обов'язкове поле")
      .min(3, "Ім'я має бути більше 2 символів")
      .max(100, "Ім'я має бути не більше 100 символів")
      .matches(/^[A-Za-zА-Яа-яІіЇїЄєҐґ']+$/, "Ім'я має складатись лише з літер"),
    customerPhone: yup
      .string()
      .required("Номер телефону - обов'язкове поле")
      .matches(/^\+380\d{9}$/, "Номер телефону має бути +380ХХХХХХХХХ"),
    deliveryAddress: yup
      .string()
      .required("Адреса - обов'язкове поле")
      .min(3, "Адреса має бути більше 3 символів")
      .max(100, "Адреса має бути не більше 100 символів"),
  }),
});

const [customerName, customerNameProps] = defineField("customerName");
const [customerPhone, customerPhoneProps] = defineField("customerPhone");
const [deliveryAddress, deliveryAddressProps] = defineField("deliveryAddress");

const submitForm = handleSubmit(() => {
  const payload = {
    customerName: customerName.value,
    customerPhone: customerPhone.value,
    deliveryAddress: deliveryAddress.value,
  };

  postOrder(payload)
    .then(() => {
      cartStore.clearLocalCart();
      notify("The order successfully placed! 🛒", NotificationType.SUCCESS)
        .then(() => router.push({ name: RouteName.ORDERS }))
    })
    .catch(() =>
      notify("Something went wrong! 😒", NotificationType.ERROR)
        .then(() => router.push({ name: RouteName.CART }))
    );
});

const showForm = () => {
  const userStore = useUserStore();
  isFormVisible.value = true;

  if (userStore.user) {
    customerName.value = userStore.user.name;
    customerPhone.value = userStore.user.phone;
  }
}


onMounted(() => {
  cartStore.fetchCart();
})
</script>

<template>
  <div class="order _section">
    <div class="order__container _container">
      <h2 class="order__title _title">{{ $t("order") }}</h2>
      <OrderPreview :items="cartStore.cartList" :total="cartStore.total" class="order__preview" />
      <form v-if="isFormVisible" class="order__form form-order">
        <InputComponent
          v-model="customerName"
          v-bind="customerNameProps"
          :error="errors.customerName"
          :placeholder="$t('enter-title')"
          :name="$t('title')"
          class="_input"
        />
        <InputComponent
          v-model="customerPhone"
          v-bind="customerPhoneProps"
          :error="errors.customerPhone"
          :placeholder="$t('enter-title')"
          :name="$t('title')"
          class="_input"
        />
        <InputComponent
          v-model="deliveryAddress"
          v-bind="deliveryAddressProps"
          :error="errors.deliveryAddress"
          :placeholder="$t('enter-title')"
          :name="$t('title')"
          class="_input"
        />
      </form>
      <div class="order__actions actions-order _flex _ai-c _jc-sb _gap-x-32">
        <ButtonComponent class="_button-alt" @click="isFormVisible ? submitForm() : showForm()">
          {{ $t("make-order") }}
        </ButtonComponent>
        <ButtonComponent class="_button">
          {{ $t("cancel") }}
        </ButtonComponent>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.order {
  &__preview,
  &__actions {
    margin: 32px auto;
  }
  &__actions {
    max-width: 640px;
  }
}

.form-order {
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 20px;
  max-width: 640px;
}
</style>
