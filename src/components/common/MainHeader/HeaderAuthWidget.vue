<template>
  <div class="auth-widget">
    <button type="button" class="header-buttons__registration btn white-btn" @click="openRegPopup">
      {{ $t('header.loginButton') }}
    </button>
  </div>
</template>

<script setup>
  import {useRegistrationStore} from "@/store/registrationStore/useRegistrationStore";

  const regStore = useRegistrationStore()

  function openRegPopup() {
    regStore.setVisibleRegistrationPopup(true)
  }
</script>

<style lang="scss" scoped>

</style>