<template>
  <button class="notification-button">
    <span v-if="count !== 0" class="notification-button__count">
      {{ count }}
    </span>
    <img class="notification-button__icon" src="./../../assets/img/bell.svg" alt="bell" />
  </button>
</template>

<script setup>
  defineProps({
    count: {
      type: Number,
      default: 0,
    },
  })
</script>

<style lang="scss" scoped>
  .notification-button {
    position: relative;

    &__count {
      position: absolute;
      top: 0;
      right: 0;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: $red;
      color: #FFF;
      font-family: "Inter", sans-serif;
      font-size: 8px;
      font-weight: 700;
    }
  }
</style>