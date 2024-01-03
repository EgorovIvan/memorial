<template>
  <div class="steep">
    <div class="steep-wrap grid-col-2_3">
      <div class="user-current-avatar" :style="{'background': `url(${createProfileStore.getUserBackground}) no-repeat center/cover`}"></div>
      <div class="user-total-info">
        <h3 class="user-total-info__name">
          {{ createProfileStore.getFullName }}
        </h3>

        <div class="status-moderation">
          <span class="status-moderation__title">
            Статус модерации:
          </span>
          <p class="status-moderation__text -status-error">
            Публикация отклонена 14:31 22.10.2021
          </p>
        </div>

        <p class="moderation-text">
          Свидетельство о смерти не соответствует установленному
          образцу
        </p>
      </div>
    </div>
    <div class="steep-wrap">
      <span class="text-public">
        Настройки публичного доступа к профилю:
      </span>
      <ul class="settings-public grid-col-3">
        <li class="settings-public__item">
          <label class="settings-wrap">
            <input
                type="radio"
                class="settings-wrap__radio"
                name="settings-public"
                value="public"
                v-model="access"
                checked
            />
            <span class="settings-wrap__title">
              Открытый
            </span>
            <span class="settings-wrap__desc">
              Данные профиля видят все пользователи
            </span>
          </label>
        </li>
        <li class="settings-public__item">
          <label class="settings-wrap">
            <input
                type="radio"
                class="settings-wrap__radio"
                name="settings-public"
                value="available"
                v-model="access"
            />
            <span class="settings-wrap__title">
              Доступный
            </span>
            <span class="settings-wrap__desc">
              Часть данных профиля скрыты: место захоронения, родственники
            </span>
          </label>
        </li>
        <li class="settings-public__item">
          <label class="settings-wrap">
            <input
                type="radio"
                class="settings-wrap__radio"
                name="settings-public"
                value="private"
                v-model="access"
            />
            <span class="settings-wrap__title">
              Закрытый
            </span>
            <span class="settings-wrap__desc">
              Профиль вижу только я
            </span>
          </label>
        </li>
      </ul>
    </div>
  </div>

  <div class="buttons-save">
    <button type="button" class="save-draft hide btn white-btn">
      Сохранить как черновик
    </button>
    <button type="button" class="save-and-next btn blue-btn" @click="createProfile">
      Сохранить и продолжить
    </button>
  </div>
</template>

<script setup>
import {useCreateProfileStore} from "@/store/createProfileStore/useClientProfileStore";
import {computed} from "vue";
import {useNotificationStore} from "@/store/notificationStore/notificationStore";
import NotificationTypes from "@/const/NotificationTypes";
import {useI18n} from "vue-i18n";

const {t} = useI18n()
const notification = useNotificationStore()
const createProfileStore = useCreateProfileStore()

const access = computed({
  get () {
    return createProfileStore.profile.access
  },
  set (value) {
    createProfileStore.setAccess(value)
  }
})

async function createProfile() {
  try {
    await createProfileStore.createProfile()
  } catch (e) {
    console.log(e)
    notification.showNotification(t('notifications.serverError'), NotificationTypes.ERROR)
  }
}
</script>

<style lang="scss" scoped>
</style>