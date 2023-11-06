<template>
  <footer class="footer">
    <a href="#" class="logo-footer">
      <img src="./../../../assets/img/logo-light.svg" class="logo-footer__img" alt="" title=""/>
    </a>

    <nav class="footer-menu">
      <ul class="menu-list">
        <li class="menu-list__item">
          <a href="#" class="menu-list__link">О проекте</a>
        </li>
        <li class="menu-list__item">
          <a href="#" class="menu-list__link">Семейное древо</a>
        </li>
        <li class="menu-list__item">
          <a href="#" class="menu-list__link">Магазин</a>
        </li>
        <li class="menu-list__item">
          <a href="#" class="menu-list__link">Поиск людей</a>
        </li>
        <li class="menu-list__item">
          <a href="#" class="menu-list__link">Кладбища</a>
        </li>
        <li class="menu-list__item">
          <a href="#" class="menu-list__link">Контакты</a>
        </li>
      </ul>
    </nav>

    <a href="#" class="cookie-link">Политика обработки персональных данных</a>
  </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .footer {
    width: 100%;
    height: 116px;
    padding: 0 $content-size;
    background-color: $black;
    display: grid;
    grid-column-gap: 24px;
    grid-template-columns: max-content 1fr max-content;
    justify-content: space-between;
    align-items: center;
  }

  .logo-footer__img {
    width: 36px;
  }

  .footer-menu {
    width: 100%;
  }

  .menu-list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .menu-list__item {
    margin-right: 24px;
  }

  .menu-list__item:last-child {
    margin: 0;
  }

  .menu-list__link, .cookie-link {
    font-size: 16px;
    color: #fff;
    line-height: 24px;
  }

  .menu-list__link:hover, .cookie-link:hover {
    text-decoration: underline;
  }
</style>