<template>
  <div class="info-profile">
    <UserPhoto />
    <div class="info-profile-name-wrap">
      <h6 class="info-profile__name">{{ profileStore.user.username }}</h6>
      <span class="info-profile__status">{{ t('profilePage.sidebar.title') }}</span>
    </div>
    <div class="info-profile-value">
      <div class="info-profile-value-wrap">
        <span class="info-profile-value-num">{{ profileStore.user.profiles_count }}</span>
        <span class="info-profile-value-text">{{ t('profilePage.sidebar.profiles') }}</span>
      </div>
      <div class="info-profile-value-wrap">
        <span class="info-profile-value-num">{{ profileStore.user.accesses_count }}</span>
        <span class="info-profile-value-text">{{ t('profilePage.sidebar.accesses') }}</span>
      </div>
    </div>
    <button
      @click="emits('showRecoveryPasswordPopup')"
      type="button"
      id="input-link"
      class="button-change-password white-btn btn"
      :title="t('profilePage.sidebar.changePasswordButton')"
    >
      {{ t('profilePage.sidebar.changePasswordButton') }}
    </button>
    <a href="#" class="delete-profile" :title="t('profilePage.sidebar.deleteAccountButton')">
      {{ t('profilePage.sidebar.deleteAccountButton') }}
    </a>
  </div>
</template>

<script setup>
import {useProfileStore} from "@/store/profileStore/useProfileStore";
import UserPhoto from "@/components/ProfileSidebar/UserPhoto.vue";
import {useI18n} from "vue-i18n";

const emits = defineEmits([
    'showRecoveryPasswordPopup',
])

const { t } = useI18n()
const profileStore = useProfileStore()
</script>