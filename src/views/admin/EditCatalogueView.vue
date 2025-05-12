<script setup>
import InputComponent from "@/components/shared/InputComponent.vue";
import { computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useForm } from "vee-validate";
import * as yup from "yup";
import { useGoodsStore } from "@/stores/goods";
import { notify } from "@/utils/notify";
import { NotificationType } from "@/constants/NotificationType";

const goodsStore = useGoodsStore();
const route = useRoute();
const router = useRouter();

const id = parseInt(route.params.id[0]);
const isEdit = computed(() => id !== 0);

//await goodsStore.fetchCategories();
const { defineField, errors, handleSubmit } = useForm({
  validationSchema: yup.object({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(100, "Name must be less than 100 characters"),
    price: yup
      .number()
      .required("Price must be required")
      .min(1, "Price must be bigger than 0")
      .max(100000, "Price must be less then 100000"),
    ingredients: yup
      .string()
      .required("Ingredients is required")
      .min(3, "Ingredients must be at least 1 character")
      .max(250, "Ingredients must be less than 250 character"),
    image: yup
      .mixed()
      .required("Image is required")
      .test("fileType", "Unsupported file type", (value) => {
        return !value || ["image/jpeg", "image/png", "image/jpg"].includes(value.type);
      }),
    weight: yup
      .string()
      .required("Weight is required")
      .min(1, "Weight must be bigger than 1")
      .max(10000, "Weight musth be less than 10000"),
    category: yup
      .string()
      .oneOf(goodsStore.categories, "Invalid category:" + goodsStore.categories.join(", "))
      .required("Category is required"),
  }),
});

const [name, nameProps] = defineField("name");
const [price, priceProps] = defineField("price");
const [ingredients, ingredientsProps] = defineField("ingredients");
const [image, imageProps] = defineField("image");
const [weight, weightProps] = defineField("weight");
const [category, categoryProps] = defineField("category");

const submitForm = async () => {
  const formData = new FormData();

  if (image.value) {
    formData.append("image", image.value);
  }
  const sushiData = {
    name: name.value,
    price: price.value,
    ingredients: ingredients.value,
    weight: weight.value,
    category: category.value,
  };

  formData.append("sushi", new Blob([JSON.stringify(sushiData)], { type: "application/json" }));
  console.log(formData);
  goodsStore.postGoods(formData)
    .then(() => {
      notify("Catalogue updated successfully! 🛒", NotificationType.SUCCESS)
        .then(() => {
          router.push({ name: 'admin' })
        })
    })
    .catch(() => notify("Something went wrong! 😒", NotificationType.ERROR));
};

const handleSubmitForm = handleSubmit(submitForm);

onMounted(() => {
  if (isEdit.value) {
    const goods = goodsStore.goods.find((n) => n.id === id);
    if (goods) {
      name.value = goods.name;
      price.value = goods.price;
      ingredients.value = goods.ingredients;
      image.value = goods.image;
      weight.value = goods.weight;
      category.value = goods.category;
    }
  }
});
</script>

<template>
  <div class="edit-catalogue">
    <div class="edit-catalogue__container _container">
      <h1 class="_title">
        {{ isEdit ?  $t("edit-good") : $t("add-good") }}
      </h1>

      <form @submit.prevent="handleSubmitForm" class="_flex _f-dir-col _gap-y-16">
        <InputComponent
          v-model="name"
          v-bind="nameProps"
          :error="errors.name"
          :placeholder="$t('enter-title')"
          :name="$t('title')"
          class="_input"
        />
        <InputComponent
          v-model="price"
          v-bind="priceProps"
          :error="errors.price"
          :placeholder="$t('enter-price')"
          :name="$t('price')"
          class="_input"
        />
        <InputComponent
          v-model="ingredients"
          v-bind="ingredientsProps"
          :error="errors.ingredients"
          :placeholder="$t('enter-ingridients')"
          :name="$t('ingridients')"
          class="_input"
        />
        <InputComponent
          @change="(e) => (image = e.target.files[0])"
          type="file"
          v-bind="imageProps"
          :error="errors.image"
          :name="$t('photo')"
          class="_input"
        />
        <InputComponent
          v-model="weight"
          v-bind="weightProps"
          :error="errors.weight"
          :placeholder="$t('enter-weight')"
          :name="$t('weight')"
          class="_input"
        />
        <InputComponent
          v-model="category"
          v-bind="categoryProps"
          :error="errors.category"
          :placeholder="$t('enter-category')"
          :name="$t('category')"
          class="_input"
        />

        <button type="submit" class="_button-alt">
          {{ isEdit ? $t('save') : $t('create') }}
        </button>
      </form>
    </div>
  </div>
</template>
