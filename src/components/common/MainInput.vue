<template>
  <div class="input-wrap">
    <span class="input-wrap__title">{{ title }}</span>
    <div class="input-form">
      <slot name="link"></slot>
      <input type="text" class="input-text" @input="emits('input', $event.target.value)" />
    </div>
  </div>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  })

  const emits = defineEmits([
      'input'
  ])
</script>

<style scoped lang="scss">
  .input-wrap {
    width: 100%;
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .input-wrap__title {
    color: $dark-gray;
    font-size: 14px;
    margin-bottom: 0.2em;
    padding-bottom: 3px;
  }


  .input-form {
    width: 100%;
    height: 44px;
    padding: 6.4px 17.6px;
    background-color: $gray;
    border: 1px solid #cdd1d6;
    border-radius: 7px;
    transition: $normal;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }

  .input-form:hover{
    border: 1px solid $blue;
  }

  .input-text {
    width: 100%;
    color: $black;
    font-size: 16px;
    background-color: transparent;
    border: none;
  }

  .input-link + .input-text {
    width: calc(100% - 120px);
  }
</style>