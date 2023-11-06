<template>
  <header class="header login-page">
    <MainLogo />
    <HeaderMenu />
    <HeaderFunctionalBlock />
  </header>
</template>

<script setup>
import MainLogo from "@/components/common/MainLogo.vue";
import HeaderMenu from "@/components/common/MainHeader/HeaderMenu.vue";
import HeaderFunctionalBlock from "@/components/common/MainHeader/HeaderFunctionalBlock.vue";
</script>

<style scoped lang="scss">
  .header {
    width: 100%;
    padding: 0 $content-size;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    height: 97px;
    background-color: #fff;
    border-bottom: 1px solid $gray;
  }

  .header.login-page {
    height: 76px;
    padding: 26px $content-size 0;
    background-color: transparent;
    border: none;
  }

  .header.login-page ~ .content {
    padding-top: 0;
  }
</style>