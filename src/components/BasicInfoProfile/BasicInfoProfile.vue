<template>
  <div class="edit-profile">
    <h4 class="edit-profile__title">Основная информация</h4>

    <div class="edit-profile-wrap grid-col-2">
      <MainInput
        :value="name"
        title="Имя:"
        name="name"
        @input="setName"
      />
      <MainInput
          :value="lastName"
          title="Отчество:"
          name="lastName"
          @input="setLastName"
      />
      <MainInput
          :value="surname"
          title="Фамилия:"
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
        Сохранить
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
