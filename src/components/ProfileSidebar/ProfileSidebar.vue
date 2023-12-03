<template>
  <div class="info-profile">
    <UserPhoto />
    <div class="info-profile-name-wrap">
      <h6 class="info-profile__name">{{ profileStore.user.username }}</h6>
      <span class="info-profile__status">Создатель профилей</span>
    </div>
    <div class="info-profile-value">
      <div class="info-profile-value-wrap">
        <span class="info-profile-value-num">{{ profileStore.user.profiles_count }}</span>
        <span class="info-profile-value-text">Профилей</span>
      </div>
      <div class="info-profile-value-wrap">
        <span class="info-profile-value-num">{{ profileStore.user.accesses_count }}</span>
        <span class="info-profile-value-text">Доступов</span>
      </div>
    </div>
    <button
      @click="emits('showRecoveryPasswordPopup')"
      type="button"
      id="input-link"
      class="button-change-password white-btn btn"
      title="Сменить пароль"
    >
      Смена пароля
    </button>
    <a href="#" class="delete-profile" title="Удалить аккаунт">Удалить аккаунт</a>
  </div>
</template>

<script setup>
import {useProfileStore} from "@/store/profileStore/useProfileStore";
import UserPhoto from "@/components/ProfileSidebar/UserPhoto.vue";

const emits = defineEmits([
    'showRecoveryPasswordPopup',
])

const profileStore = useProfileStore()
</script>