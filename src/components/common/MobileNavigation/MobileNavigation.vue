<template>
  <div class="mobile-navigation">
    <MobileNavigationLink
      v-for="(link, index) in links"
      :icon="link.icon"
      :text-key="link.textKey"
      :link="link.link"
      :key="index"
    />
  </div>
</template>

<script setup>
  import MobileNavigationLink from "@/components/common/MobileNavigation/MobileNavigationLink.vue";
  import {ref} from "vue";

  const links = ref([
    {
      textKey: 'mobileNavigation.people',
      icon: 'people',
      link: '/people',
    },
    {
      textKey: 'mobileNavigation.places',
      icon: 'places',
      link: '/places',
    },
    {
      textKey: 'mobileNavigation.home',
      icon: 'home',
      link: '/news',
    },
    {
      textKey: 'mobileNavigation.communities',
      icon: 'communities',
      link: '/communities',
    },
    {
      textKey: 'mobileNavigation.account',
      icon: 'account',
      link: '/profile',
    },
  ])
</script>

<style scoped>
  .mobile-navigation {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: grid;
    z-index: 9999;
    grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
    background: #FFF;
    box-shadow: 0 -5px 30px 0 rgba(0, 0, 0, 0.10);
    visibility: hidden;
    opacity: 0;

    @media screen and (max-width: 768px) {
      visibility: visible;
      opacity: 1;
    }
  }
</style>