<template>
  <div class="header-buttons">
    <ChangeLocale class="header-buttons__lang" />
    <button type="button" class="header-buttons__registration btn white-btn" @click="openRegPopup">
      {{ $t('header.loginButton') }}
    </button>
    <button type="button" class="header-buttons__menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</template>

<script setup>
import ChangeLocale from "@/components/common/MainHeader/ChangeLocale.vue";
import {useRegistrationStore} from "@/store/registrationStore/useRegistrationStore";

const regStore = useRegistrationStore()

function openRegPopup() {
  regStore.setVisibleRegistrationPopup(true)
}
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

    @media screen and (max-width: 860px) {
      margin-right: 6px;
    }
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

    @media screen and (max-width: 860px) {
      display: none;
    }
  }

  .header-buttons__menu {
    display: none;
  }

  @media screen and (max-width: 860px) {
    .header-buttons__menu {
      display: block;
      width: 44px;
      height: 44px;
      position: relative;
    }

    .header-buttons__menu span {
      width: 18px;
      height: 2px;
      border-radius: 1px;
      background-color: $black;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .header-buttons__menu span:nth-child(1) {
      top: calc(50% - 6px);
    }

    .header-buttons__menu span:nth-child(3) {
      top: calc(50% + 6px);
    }
  }
</style>