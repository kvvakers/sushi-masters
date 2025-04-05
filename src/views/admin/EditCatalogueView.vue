<script setup>
import InputComponent from "@/components/shared/InputComponent.vue";
import { reactive } from "vue";

const state = reactive({
  name: {
    value: "",
    errors: [],
  },
  price: {
    value: "",
    errors: [],
  },
  ingredients: {
    value: "",
    errors: [],
  },
  image: {
    value: "",
    errors: [],
  },
  weight: {
    value: "",
    errors: [],
  },
  category: {
    value: "",
    errors: [],
  },
});
</script>

<template>
  <div class="edit-catalogue">
    <div class="edit-catalogue__container _container">
      <h1 class="_title">
        {{ isEdit ? "Редагувати" : "Додати" }}
      </h1>

      <form @submit.prevent="handleSubmitForm" class="_flex _f-dir-col _gap-y-16">
        <InputComponent
          v-model="state.name.value"
          :errors="state.name.errors"
          placeholder="Введіть назву"
          name="Назва"
          class="_input"
        />
        <InputComponent
          v-model="state.price.value"
          :errors="state.price.errors"
          placeholder="Введіть віртість"
          name="Вартість"
          class="_input"
        />
        <InputComponent
          v-model="state.ingredients.value"
          :errors="state.ingredients.errors"
          placeholder="Введіть інгредієнти"
          name="Інгредієнти"
          class="_input"
        />
        <InputComponent
          v-model="state.image.value"
          :errors="state.image.errors"
          placeholder="Введіть посилання на фото"
          name="Фото"
          class="_input"
        />
        <InputComponent
          v-model="state.weight.value"
          :errors="state.weight.errors"
          placeholder="Введіть вагу"
          name="Вага"
          class="_input"
        />
        <InputComponent
          v-model="state.category.value"
          :errors="state.category.errors"
          placeholder="Оберіть катергорію"
          name="Категорія"
          class="_input"
        />

        <button type="submit" class="_button-alt">
          {{ isEdit ? "Зберегти" : "Створити" }}
        </button>
      </form>
    </div>
  </div>
</template>
