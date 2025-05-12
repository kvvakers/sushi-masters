<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { availableLocales } from '@/i18n';
import { useI18n } from 'vue-i18n';

const userStore = useUserStore();
const { locale } = useI18n()

const switchLocale = (newLocale) => {
  locale.value = newLocale
  localStorage.setItem('lang', newLocale);
}
</script>

<template>
  <header class="header">
    <div class="header__top _flex _ai-c _jc-c">
      <RouterLink to="/catalogue" class="header__logo _image">
        <img src="../assets/img/logo.png" alt="" />
      </RouterLink>
    </div>
    <div class="header__container _container">
      <div class="header__bottom">
        <div class="bottom-header__start">
          <span>{{ $t("city") }}</span>
          <a href="tel=0509175657">+38 050 917 5657</a>
        </div>
        <div class="bottom-header__end">
          <div class="_flex _jc-sb _ai-c _gap-x-16">
            <select :value="locale" @change="switchLocale($event.target.value)">
              <option v-for="lang in availableLocales" :key="lang.locale" :value="lang.locale">
                {{ lang.label }}
              </option>
            </select>
            <template v-if="userStore.exists">
              <RouterLink v-if="userStore.userRole" to="/log-out" class="_flex _ai-c _gap-x-8">
                <i class="material-icons">manage_accounts</i>
                {{ $t('admin') }}
              </RouterLink>
              <RouterLink to="/cart" class="_flex _ai-c _gap-x-8">
                <i class="material-icons basket">shopping_basket</i>
                {{ $t('cart') }}
              </RouterLink>
              <RouterLink to="/log-out" class="_flex _ai-c _gap-x-8">
                <i class="material-icons">logout</i>
                {{ $t("sign-out") }}
              </RouterLink>
            </template>
            <RouterLink v-else to="/account" class="_flex _ai-c _gap-x-8">
              <i class="material-icons">person</i>
              {{ $t("sign-in") }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  &__top {
    background-color: #ece00fff;
    padding: 20px 0;
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #8f8787;
    padding: 18px 0;

    .bottom-header__start {
      span {
        font-size: 24px;
        margin-right: 25px;
      }

      a {
        font-size: 18px;
      }

      a:hover {
        color: #071f77;
      }
    }

    .bottom-header__end {
      font-size: 18px;
    }
  }
}
</style>
