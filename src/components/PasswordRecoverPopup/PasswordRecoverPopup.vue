<template>
  <AuthPopup
    :visible="regStore.visiblePasswordRecoverPopup"
    position="top"
    @close="regStore.setVisiblePasswordRecoverPopup(false)"
  >
    <template #content>
      <form class="form-recover">
        <h3 class="form-recover__title">Восстановить пароль</h3>
        <div class="form-recover-wrap">
          <p>Если вы забыли пароль, введите email. <br>Контрольная строка для смены пароля, а также ваши
            регистрационные данные, будут высланы вам по электронной почте.</p>
          <MainInput
            :value="''"
            title="Email:"
            class="form-recover__input"
          />
          <input type="submit" class="form__submit blue-btn btn" value="Выслать" title="Зарегистрироваться">
        </div>
      </form>
    </template>
  </AuthPopup>

</template>

<script setup>
import AuthPopup from "@/components/common/AuthPopup.vue";
import MainInput from "@/components/common/MainInput.vue";
import {useRegistrationStore} from "@/store/registrationStore/useRegistrationStore";

const regStore = useRegistrationStore()
</script>

<style scoped lang="scss">
.form-recover {
  width: 100%;
  max-width: 1220px;
  display: grid;
  grid-template-columns: 1fr 520px;
  grid-column-gap: 10px;
  justify-content: flex-start;

  &__title {
    font: 900 52px sans-serif;
    line-height: 1.3;
    color: $black;
  }

  &__input {
    margin-top: 18px;
    margin-bottom: 32px;
  }
}
</style>