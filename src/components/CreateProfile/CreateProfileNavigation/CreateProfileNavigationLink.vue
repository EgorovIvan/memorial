<template>
  <li :class="getClasses">
    <i class="steeps-nav__icon"></i>
    <span class="steeps-nav__title">
      {{ title }}
    </span>
    <p class="steeps-nav__desc">
      {{ desc }}
    </p>
  </li>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
})

const getClasses = computed(() => {
  return [
    'steeps-nav__item',
    {
      'active': props.active,
      'current': props.desc,
    }
  ];
})
</script>