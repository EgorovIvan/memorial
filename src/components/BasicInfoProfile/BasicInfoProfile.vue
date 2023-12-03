<template>
  <div class="edit-profile">
    <h4 class="edit-profile__title">
      {{ t('profilePage.basicInfo.title') }}
    </h4>
    <div class="edit-profile-wrap grid-col-2">
      <MainInput
        :value="name"
        :title="t('profilePage.basicInfo.firstName')"
        name="name"
        @input="setName"
      />
      <MainInput
          :value="lastName"
          :title="t('profilePage.basicInfo.middleName')"
          name="lastName"
          @input="setLastName"
      />
      <MainInput
          :value="surname"
          :title="t('profilePage.basicInfo.lastName')"
          name="surname"
          @input="setSurname"
      />
      <MainInput
        value="email"
        title="Email:"
        name="email"
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
import {computed, ref} from "vue";
import {useProfileStore} from "@/store/profileStore/useProfileStore";
import {useNotificationStore} from "@/store/notificationStore/notificationStore";
import NotificationTypes from "@/const/NotificationTypes";
import {useI18n} from "vue-i18n";

const profileStore = useProfileStore()
const notification = useNotificationStore()
const { t } = useI18n()
const name = ref('')
const lastName = ref('')
const surname = ref('')

const getUsername = computed(() => {
  return `${name.value} ${lastName.value} ${surname.value}`.trim()
})

function setName(changedName) {
  name.value = changedName
}

function setSurname(name) {
  surname.value = name
}

function setLastName(name) {
  lastName.value = name
}

async function saveChanges() {
  try {
    await profileStore.changeProfile(getUsername.value)
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
