<template>
  <nav class="header-menu">
    <ul class="menu">
      <template v-for="(link, index) in headerLinks" :key="index">
        <li class="menu__item">
          <router-link :to="link.href" class="menu__link">
            {{ $t('header.navigation.people') }}
          </router-link>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script setup>
  const headerLinks = [
    {
      key: 'header.navigation.people',
      href: '/people',
    },
    {
      key: 'header.navigation.places',
      href: '/places',
    },
    {
      key: 'header.navigation.tree',
      href: '/tree',
    },
    {
      key: 'header.navigation.shop',
      href: '/shop',
    },
    {
      key: 'header.navigation.orders',
      href: '/orders',
    },
  ]
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

  @media screen and (max-width: 1120px) {
    .menu__item {
      margin-right: 16px;
    }

    .menu__link {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 860px) {
    .header-menu {
      display: none;
    }

    .aside-menu .header-menu {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      height: 100%;
      padding: 0 40px;
      width: 100%;
    }

    .menu {
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }

    .menu__item {
      margin: 0 0 32px 0;
    }

    .menu__link {
      font: 900 26px sans-serif;
      color: $black;
    }
  }
</style>