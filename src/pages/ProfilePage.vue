<template>
  <PageWrapper>
    <div class="profile">
      <section class="edit">
        <BreadcrumbsLine />
        <h3 class="edit__title">{{ t('profilePage.title') }}</h3>

        <div class="edit-wrap">
          <ProfileSidebar
            @showRecoveryPasswordPopup="visibleRecoveryPasswordPopup = true"
          />
          <BasicInfoProfile />
        </div>
      </section>
    </div>
    <ProfileRecoveryPasswordPopup
      :visible="visibleRecoveryPasswordPopup"
      @close="visibleRecoveryPasswordPopup = false"
      @changePassword="changePassword"
    />
  </PageWrapper>
</template>

<script setup>
import PageWrapper from "@/components/common/PageWrapper.vue";
import {onMounted, ref} from "vue";
import BreadcrumbsLine from "@/components/common/BreadcrumbsLine.vue";
import ProfileSidebar from "@/components/ProfileSidebar/ProfileSidebar.vue";
import BasicInfoProfile from "@/components/BasicInfoProfile/BasicInfoProfile.vue";
import {useProfileStore} from "@/store/profileStore/useProfileStore";
import NotificationTypes from "@/const/NotificationTypes";
import {useNotificationStore} from "@/store/notificationStore/notificationStore";
import {useI18n} from "vue-i18n";
import ProfileRecoveryPasswordPopup from "@/components/ProfileRecoveryPasswordPopup/ProfileRecoveryPasswordPopup.vue";

const { t } = useI18n()
const profileStore = useProfileStore()
const notification = useNotificationStore()
const visibleRecoveryPasswordPopup = ref(false)

async function changePassword({password, confirmPassword}) {
  if (password !== confirmPassword) {
    return notification.showNotification(t('notifications.passwordMismatch'), NotificationTypes.WARNING)
  }
  try {
    await profileStore.changeProfile(profileStore.user.username, password, confirmPassword)
    visibleRecoveryPasswordPopup.value = false
    notification.showNotification(t('notifications.passwordChangedSuccess'), NotificationTypes.SUCCESS)
  } catch (e) {
    console.log(e)
    notification.showNotification(t('notifications.serverError'), NotificationTypes.ERROR)
  }
}

onMounted(async () => {
  try {
    await profileStore.getProfileInfo()
  } catch (e) {
    console.log(e)
    notification.showNotification(t('notifications.serverError'), NotificationTypes.ERROR)
  }
})
</script>

<style scoped lang="scss">
.profile {
  width: 100%;
  min-height: calc(100vh - 116px);
  background: $gray;
  margin-top: 96px;
}
</style>
