<template>
  <h4 class="edit-profile__title">
    {{ t('profilePage.profileAccess.title') }}
  </h4>

  <ul class="access-profiles">
    <li class="access-profiles__item">
      <div class="access-profiles__wrap">
        <div class="access-profiles__img">
          <img src="img/relatives/avatar-1.jpg" class="bg-img" alt="" title=""/>
        </div>
        <span class="access-profiles__name">Алексей В.Н.</span>
      </div>
      <span class="access-profiles__status">
        {{ t('profilePage.profileAccess.roles.admin') }}
      </span>
    </li>
    <li class="access-profiles__item">
      <div class="access-profiles__wrap">
        <div class="access-profiles__img">
          <img src="img/relatives/avatar-2.jpg" class="bg-img" alt="" title=""/>
        </div>
        <span class="access-profiles__name">Андросова М. В.</span>
      </div>
      <span class="access-profiles__status">
        {{ t('profilePage.profileAccess.roles.fullAccess') }}
      </span>
    </li>
    <li class="access-profiles__item">
      <div class="access-profiles__wrap">
        <div class="access-profiles__img">
          <img src="img/relatives/avatar-1.jpg" class="bg-img" alt="" title=""/>
        </div>
        <span class="access-profiles__name">Анастасия К. П.</span>
      </div>
      <span class="access-profiles__status wait-status">
        {{ t('profilePage.profileAccess.roles.waitConfirm') }}
      </span>
    </li>
  </ul>

  <button type="button" class="button-share">
    {{ t('profilePage.profileAccess.share') }}
  </button>
</template>

<script setup>
import {useI18n} from "vue-i18n";

const { t } = useI18n()
</script>