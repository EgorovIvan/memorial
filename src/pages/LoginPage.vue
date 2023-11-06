<template>
  <PageWrapper>
    <transition name="fade">
      <RegistrationPopup v-if="regStore.visibleRegistrationPopup" />
    </transition>
    <main class="content">
      <PreviewSection />
    </main>
  </PageWrapper>
</template>

<script setup>
import PageWrapper from "@/components/common/PageWrapper.vue";
import PreviewSection from "@/components/PreviewSection/PreviewSection.vue";
import RegistrationPopup from "@/components/RegistrationPopup/RegistrationPopup.vue";
import {useRegistrationStore} from "@/store/registrationStore/useRegistrationStore";

const regStore = useRegistrationStore()
</script>

<style scoped lang="scss">
.content {
  width: 100%;
  min-height: calc(100vh - 116px);
  display: flex;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
