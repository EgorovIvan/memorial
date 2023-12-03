<template>
  <PageWrapper>
    <main class="content">
      <PreviewSection />
    </main>
  </PageWrapper>
</template>

<script setup>
import PageWrapper from "@/components/common/PageWrapper.vue";
import PreviewSection from "@/components/PreviewSection/PreviewSection.vue";
</script>

<style scoped lang="scss">
.content {
  width: 100%;
  min-height: calc(100vh - 116px);
  display: flex;
}
</style>
