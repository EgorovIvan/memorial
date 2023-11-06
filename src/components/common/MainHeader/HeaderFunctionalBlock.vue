<template>
  <div class="header-buttons" id="header-button">
    <button type="button" class="header-buttons__lang">Ru</button>
    <button type="button" class="header-buttons__registration open-registration btn white-btn">Регистрация</button>
    <button type="button" class="header-buttons__menu" id="mobile-menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .header-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header-buttons__lang {
    width: 44px;
    margin-right: 12px;
    border: 1px solid $gray;
    color: $dark-gray;
    transition: $normal;
    background-color: transparent;
  }

  .header-buttons__lang:hover {
    background-color: $gray;
    border-color: $gray;
    color: rgba(32, 30, 31, .8);
  }

  .header-buttons__registration, .header-buttons__lang {
    font: 500 14px sans-serif;
    letter-spacing: .05em;
    height: 44px;
    text-transform: uppercase;
    border-radius: 7px;
  }

  .header-buttons__registration {
    padding: 0 15.4px;
  }

  .header-buttons__menu {
    display: none;
  }
</style>