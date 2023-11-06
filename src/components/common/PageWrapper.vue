<template>
  <div class="page">
    <MainHeader />
    <slot></slot>
  </div>
</template>

<script setup>
import MainHeader from "@/components/common/MainHeader/MainHeader.vue";
</script>

<style scoped lang="scss">
</style>