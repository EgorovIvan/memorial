<template>
  <li class="breadcrumbs__item">
    <router-link :to="href" class="breadcrumbs__link">
      {{ text }}
    </router-link>
  </li>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
})
</script>