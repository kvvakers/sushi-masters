<script setup>
import { availableLocales } from "@/i18n";
import { Locale } from "@/utils/browser/Locale";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const switchLocale = (newLocale) => Locale.set(newLocale);
</script>

<template>
  <select v-model="locale" @change="switchLocale($event.target.value)">
    <option v-for="lang in availableLocales" :key="lang.locale" :value="lang.locale">
      {{ lang.label }}
    </option>
  </select>
</template>

<style>
select {
  padding: 8px 12px;
  font-size: 1rem;
}
</style>
