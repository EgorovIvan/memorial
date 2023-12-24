<template>
  <NotificationBlock />
  <RegistrationPopup />
  <PasswordRecoverPopup />
  <router-view/>
</template>

<script setup>
import NotificationBlock from "@/components/common/NotificationBlock.vue";
import PasswordRecoverPopup from "@/components/PasswordRecoverPopup/PasswordRecoverPopup.vue";
import RegistrationPopup from "@/components/RegistrationPopup/RegistrationPopup.vue";
</script>

<style scoped>
</style>