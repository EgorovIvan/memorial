<template>
  <div class="page">
    <MainHeader />
    <slot></slot>
    <MainFooter />
  </div>
</template>

<script setup>
import MainHeader from "@/components/common/MainHeader/MainHeader.vue";
import MainFooter from "@/components/common/MainFooter/MainFooter.vue";
</script>

<style scoped lang="scss">
</style>