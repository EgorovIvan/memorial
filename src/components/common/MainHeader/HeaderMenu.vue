<template>
  <nav class="header-menu" id="header-menu">
    <ul class="menu">
      <li class="menu__item">
        <a href="#" class="menu__link">Люди</a>
      </li>
      <li class="menu__item">
        <a href="#" class="menu__link">Места</a>
      </li>
      <li class="menu__item">
        <a href="#" class="menu__link">Семейное древо</a>
      </li>
      <li class="menu__item">
        <a href="#" class="menu__link">Магазин</a>
      </li>
      <li class="menu__item">
        <a href="#" class="menu__link">Заказы</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>

</script>

<style scoped lang="scss">
  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menu__item {
    margin-right: 32px;
  }

  .menu__item:last-child {
    margin: 0;
  }

  .menu__link {
    color: $black;
    font-size: 16px;
  }

  .menu__link:hover {
    text-decoration: underline;
  }
</style>