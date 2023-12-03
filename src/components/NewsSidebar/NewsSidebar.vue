<template>
  <div class="sidebar">
    <template
      v-for="(link, index) in sidebarLinks"
      :key="index"
    >
      <NewsSidebarLink
        :link="link.href"
        :active="activeLink === link.href"
      >
        {{ $t(link.key) }}
      </NewsSidebarLink>
    </template>
  </div>
</template>

<script setup>
  import NewsSidebarLink from "@/components/NewsSidebar/NewsSidebarLink.vue";

  defineProps({
    activeLink: {
      type: String,
      required: true,
    },
  })

  const sidebarLinks = [
    {
      href: "/news",
      key: "newsPage.sidebar.news",
    },
    {
      href: '/tree',
      key: "newsPage.sidebar.tree",
    },
    {
      href: '/shop',
      key: "newsPage.sidebar.shop",
    },
    {
      href: '/bookings',
      key: "newsPage.sidebar.bookings",
    },
    {
      href: '/people',
      key: "newsPage.sidebar.people",
    },
    {
      href: '/places',
      key: "newsPage.sidebar.places",
    },
    {
      href: '/communities',
      key: "newsPage.sidebar.communities",
    },
  ]
</script>

<style lang="scss" scoped>
  .sidebar {
    display: flex;
    flex-direction: column;
    margin: 30px 0 0 35px;
    position: sticky;
    top: 0;
    left: 0;

    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
</style>