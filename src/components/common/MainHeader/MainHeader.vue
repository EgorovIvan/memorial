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

  @media screen and (max-width: 1430px) {
    .header.login-page {
      padding: 26px 20px 0;
    }

    .header {
      padding: 0 20px;
    }
  }

  @media screen and (max-width: 1120px) {
    .logo-header__img {
      width: 175px;
    }
  }

  @media screen and (max-width: 980px) {
    .header {
      background-color: #fff;
      border-bottom: 1px solid var(--light-gray);
      position: fixed;
      height: 56px;
      padding: 0 20px;
    }

    .header.login-page {
      border: none;
    }
  }
</style>