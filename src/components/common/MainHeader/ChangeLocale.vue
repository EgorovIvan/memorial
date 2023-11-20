<template>
  <button @click="changeLocale" type="button" class="change-locale">
    {{ i18n.locale.value }}
  </button>
</template>

<script setup>
  import {useI18n} from "vue-i18n";

  const i18n = useI18n();

  function changeLocale() {
    if (i18n.locale.value === 'en') {
      i18n.locale.value = 'ru'
    } else {
      i18n.locale.value = 'en'
    }
  }
</script>