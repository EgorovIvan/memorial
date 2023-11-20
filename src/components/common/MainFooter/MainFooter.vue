<template>
  <footer class="footer">
    <a href="#" class="logo-footer">
      <img src="./../../../assets/img/logo-light.svg" class="logo-footer__img" alt="img" />
    </a>

    <nav class="footer-menu">
      <ul class="menu-list">
        <li class="menu-list__item">
          <a href="#" class="menu-list__link">
            {{ $t('footer.navigation.about') }}
          </a>
        </li>
        <li class="menu-list__item">
          <a href="#" class="menu-list__link">
            {{ $t('footer.navigation.tree') }}
          </a>
        </li>
        <li class="menu-list__item">
          <a href="#" class="menu-list__link">
            {{ $t('footer.navigation.shop') }}
          </a>
        </li>
        <li class="menu-list__item">
          <a href="#" class="menu-list__link">
            {{ $t('footer.navigation.search') }}
          </a>
        </li>
        <li class="menu-list__item">
          <a href="#" class="menu-list__link">
            {{ $t('footer.navigation.cemeteries') }}
          </a>
        </li>
        <li class="menu-list__item">
          <a href="#" class="menu-list__link">
            {{ $t('footer.navigation.contacts') }}
          </a>
        </li>
      </ul>
    </nav>

    <a href="#" class="cookie-link">
      {{ $t('footer.policy') }}
    </a>
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

    @media screen and (max-width: 1430px) {
      padding: 26px 20px 0;
    }

    @media screen and (max-width: 1120px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0;
      height: 210px;
    }

    @media screen and (max-width: 860px) {
      height: auto;
      padding: 32px 0 48px;
    }
  }

  .logo-footer__img {
    width: 36px;
  }

  .footer-menu {
    width: 100%;

    @media screen and (max-width: 1120px) {
      width: auto;
      margin: 24px 0 32px;
    }

    @media screen and (max-width: 860px) {
      display: none;
    }
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