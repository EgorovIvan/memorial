<template>
  <div class="profile-block">
    <NotificationButton />
    <div class="profile-block-client">
      <p class="profile-block__name">
        {{ clientStore.user.username }}
      </p>
      <img class="profile-block__arrow" src="./../../../assets/img/down.svg" alt="arrow" />
    </div>
  </div>
</template>

<script setup>
  import {useClientStore} from "@/store/clientStore/useClientStore";
  import NotificationButton from "@/components/common/NotificationButton.vue";

  const clientStore = useClientStore()
</script>

<style lang="scss" scoped>
  .profile-block {
    display: flex;
    align-items: center;
    gap: 15px;

    &-client {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
</style>