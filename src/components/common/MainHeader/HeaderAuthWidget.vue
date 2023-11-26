<template>
  <div class="auth-widget">
    <button
      v-if="!clientStore.clientIsAuth"
      type="button"
      class="header-buttons__registration btn white-btn"
      @click="openRegPopup">
      {{ $t('header.loginButton') }}
    </button>
    <ProfileBlock v-else />
  </div>
</template>

<script setup>
  import {useRegistrationStore} from "@/store/registrationStore/useRegistrationStore";
  import {useClientStore} from "@/store/clientStore/useClientStore";
  import ProfileBlock from "@/components/common/ProfileBlock/ProfileBlock.vue";

  const clientStore = useClientStore()
  const regStore = useRegistrationStore()

  function openRegPopup() {
    regStore.setVisibleRegistrationPopup(true)
  }
</script>

<style lang="scss" scoped>

</style>