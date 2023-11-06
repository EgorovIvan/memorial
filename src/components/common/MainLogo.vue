<template>
  <a href="/" class="logo-header">
    <img src="./../../assets/img/logo.svg" class="logo-header__img" alt="" title=""/>
  </a>
</template>

<script setup>
</script>

<style scoped>
  .logo-header {
    display: flex;
  }

  .logo-header__img {
    width: 272px;
  }

  @media screen and (max-width: 1120px) {
    .logo-header__img {
      width: 175px;
    }
  }

  @media screen and (max-width: 560px) {
    .logo-header__img {
      width: 140px;
    }
  }

  @media screen and (max-width: 480px) {
    .logo-header__img {
      width: 100%;
      max-width: 140px;
      padding-right: 10px;
    }
  }
</style>