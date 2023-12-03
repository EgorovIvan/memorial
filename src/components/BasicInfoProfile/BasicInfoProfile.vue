<template>
  <div class="edit-profile">
    <h4 class="edit-profile__title">Основная информация</h4>

    <div class="edit-profile-wrap grid-col-2">
      <MainInput
        value="name"
        title="Имя:"
        name="name"
      />
      <MainInput
          value="отчество"
          title="Отчество:"
          name="lastName"
      />
      <MainInput
          value="отчество"
          title="Фамилия:"
          name="surname"
      />
      <MainInput
        value="email"
        title="Email:"
        name="email"
      />
      <div></div>
      <button type="button" class="button-save btn blue-btn">Сохранить</button>
    </div>

    <AccessProfiles />
  </div>
</template>

<script setup>
import MainInput from "@/components/common/MainInput.vue";
import AccessProfiles from "@/components/BasicInfoProfile/AccessProfiles.vue";
</script>

<style lang="scss" scoped>
.button-save{
  margin-top: 20px;
}
</style>
