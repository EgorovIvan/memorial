<template>
  <ul class="breadcrumbs">
    <template
      v-for="(link, index) in links"
      :key="index"
    >
      <BreadcrumbsLink
        :href="link.href"
        :text="link.text"
      />
    </template>
  </ul>
</template>

<script setup>
import BreadcrumbsLink from "@/components/common/BreadcrumbsLink.vue";

defineProps({
  links: {
    type: Array,
    required: true,
  },
})
</script>