<script setup>
import InputComponent from "@/components/shared/InputComponent.vue";
import ButtonComponent from "@/components/shared/ButtonComponent.vue";
import { useRouter } from "vue-router";
import { ref, reactive, computed } from "vue";
import { registrate, authorizate } from "@/api/auth";
import { Token } from "@/utils/Token";
import LocaleSwitcher from "@/components/shared/LocaleSwitcher.vue";
import { useUserStore } from "@/stores/user";

// FIXME: veelidate
const isAuth = ref(false);
const error = ref("");
const router = useRouter();

const state = reactive({
  name: {
    value: "",
    errors: [],
  },
  phone: {
    value: "",
    errors: [],
  },
  password: {
    value: "",
    errors: [],
  },
});

const hasRegErrors = computed(() => {
  return state.name.errors.length > 0 || hasAuthErrors.value;
});

const hasAuthErrors = computed(() => {
  return state.phone.errors.length > 0 || state.password.errors.length > 0;
});

const validateName = () => {
  state.name.errors = [];
  if (state.name.value.length < 2) state.name.errors.push("Ім'я має буди більше 2 символів");
  if (!/^[A-Za-zА-Яа-яІіЇїЄєҐґ']+$/.test(state.name.value))
    state.name.errors.push("Ім'я має складатись лише з літер");
};

const validatePhone = () => {
  state.phone.errors = [];
  if (!/^\+380\d{9}$/.test(state.phone.value))
    state.phone.errors.push("Номер телефону має бути +380ХХХХХХХХХ");
};

const validatePassword = () => {
  state.password.errors = [];
  if (state.password.value.length < 5)
    state.password.errors.push("Пароль має буди більше 5 символів");
};

const handleResponse = (res) => {
  const userStore = useUserStore();
  userStore.fetchUser();
  Token.set(res.data.token);
  router.push({ name: "catalogue" });
};
const handleError = (err) => {
  console.log("AccountView error", err);
  switch (err.response.status) {
    case 404:
      error.value = err.response.data.message;
      break;
    case 400:
      err.response.data.errors.forEach((item) => {
        state[item.field].errors.push(item.message);
      });
      break;
  }
};

const reg = () => {
  if (hasRegErrors.value) return;
  registrate({
    name: state.name.value,
    password: state.password.value,
    phone: state.phone.value,
  })
    .then(handleResponse)
    .catch(handleError);
};

const auth = () => {
  if (hasAuthErrors.value) return;
  authorizate({
    phone: state.phone.value,
    password: state.password.value,
  })
    .then(handleResponse)
    .catch(handleError);
};
</script>

<template>
  <div class="account">
    <h2 class="account__title">{{ isAuth ? $t("sign-in") : $t("sign-up") }}</h2>
    <div>
      <InputComponent
        v-if="!isAuth"
        v-model="state.name.value"
        @update:model-value="validateName"
        :errors="state.name.errors"
        :placeholder="$t('first-name-placeholder')"
        :name="$t('first-name')"
        class="account__input _input"
      />
      <InputComponent
        v-model="state.phone.value"
        @update:model-value="!isAuth ? validatePhone() : () => {}"
        :errors="state.phone.errors"
        :placeholder="$t('phone-placeholder')"
        :name="$t('phone')"
        type="phone"
        class="account__input _input"
      />
      <InputComponent
        v-model="state.password.value"
        @update:model-value="!isAuth ? validatePassword() : () => {}"
        :errors="state.password.errors"
        :placeholder="$t('password-placeholder')"
        :name="$t('password')"
        type="password"
        class="account__input _input"
      />
    </div>

    <div class="account__actions _flex _f-dir-col _gap-y-8 _jc-c">
      <ButtonComponent
        @click-hoisting="() => (isAuth ? auth() : reg())"
        class="account__button _button-alt"
      >
        {{ isAuth ? $t("sign-in") : $t("sign-up") }}
      </ButtonComponent>
      <ButtonComponent @click-hoisting="isAuth = !isAuth" class="account__button _button">{{
        isAuth ? $t("sign-up") : $t("sign-in")
      }}</ButtonComponent>
      <div class="account__locale">
        <LocaleSwitcher />
      </div>
      <span v-if="error">{{ error }}</span>
    </div>
  </div>
</template>

<style lang="scss">
.account {
  max-width: 600px;
  margin: 72px auto;
  padding: 24px 42px;
  background-color: #fefefe;

  &__title {
    text-align: center;
    font-size: 2rem;
    color: var(--color-red);
    font-weight: 600;
  }
  &__actions {
    span {
      text-align: center;
      color: var(--color-red);
    }
  }

  &__locale {
    max-width: 50%;
    margin: 0 auto;
  }
}
</style>
