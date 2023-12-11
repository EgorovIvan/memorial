<template>
  <div class="edit-profile">
    <h4 class="edit-profile__title">
      {{ t('profilePage.basicInfo.title') }}
    </h4>
    <div class="edit-profile-wrap grid-col-2">
      <MainInput
          :value="getUsername"
          :title="t('profilePage.basicInfo.username')"
          name="username"
          @input="value => username = value"
      />
      <MainInput
        :value="getEmail"
        title="Email:"
        name="email"
        @input="value => email = value"
      />
      <div></div>
      <button
        type="button"
        class="button-save btn blue-btn"
        @click="saveChanges"
      >
        {{ t('profilePage.basicInfo.saveButton') }}
      </button>
    </div>
    <AccessProfiles />
  </div>
</template>

<script setup>
import MainInput from "@/components/common/MainInput.vue";
import AccessProfiles from "@/components/BasicInfoProfile/AccessProfiles.vue";
import {useProfileStore} from "@/store/profileStore/useProfileStore";
import {useNotificationStore} from "@/store/notificationStore/notificationStore";
import NotificationTypes from "@/const/NotificationTypes";
import {useI18n} from "vue-i18n";
import {computed, ref} from "vue";

const profileStore = useProfileStore()
const notification = useNotificationStore()
const { t } = useI18n()
const username = ref(null)
const email = ref(null)

const getUsername = computed(() => username.value === null ? profileStore.user.username : username.value)
const getEmail = computed(() => email.value === null ? profileStore.user.email : email.value)

async function saveChanges() {
  try {
    profileStore.setUsername(getUsername.value)
    profileStore.setEmail(getEmail.value)
    await profileStore.changeProfile()
    notification.showNotification(t('notifications.successChanged'), NotificationTypes.SUCCESS)
  } catch (e) {
    notification.showNotification(t('notifications.serverError'), NotificationTypes.ERROR)
  }
}
</script>

<style lang="scss" scoped>
.button-save{
  margin-top: 20px;
}
</style>
