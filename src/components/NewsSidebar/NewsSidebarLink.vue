<template>
  <router-link
    :to="link"
    :class="getClasses"
  >
    <slot></slot>
  </router-link>
</template>

<script setup>
  import {computed} from "vue";

  const props = defineProps({
    link: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
  })

  const getClasses = computed(() => {
    return ['link', {
      'link_active': props.active,
    }]
  })
</script>

<style lang="scss" scoped>
  .link {
    color: $black;
    font-family: "Lato", sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 45px;
    letter-spacing: -0.2px;
    text-transform: uppercase;
    transition: .15s ease-in-out;

    &_active {
      color: $blue;
    }
  }
</style>