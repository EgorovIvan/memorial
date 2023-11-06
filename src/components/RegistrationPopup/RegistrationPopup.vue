<template>
  <AuthPopup
    :visible="regStore.visibleRegistrationPopup"
    @close="closePopup"
  >
    <template #content>
      <form class="form-registration" id="form-registration">
        <h3 class="form-registration__title">Регистрация</h3>
        <MainInput
            :value="''"
            title="ФИО:"
        />
        <MainInput
            :value="''"
            title="Email:"
        />
        <MainInput
            :value="''"
            title="Телефон:"
        />
        <MainInput
            :value="''"
            title="Пароль:"
        />
        <MainInput
            :value="''"
            title="Повторите пароль:"
        />
        <input type="submit" class="form__submit btn blue-btn" value="Зарегистрироваться" title="Зарегистрироваться"/>
        <p class="form-registration__text">Нажимая кнопку, вы соглашаетесь с условиями
          <a href="#">политики обработки персональных данных</a>
        </p>
      </form>
    </template>
  </AuthPopup>
</template>

<script setup>
import MainInput from "@/components/common/MainInput.vue";
import {useRegistrationStore} from "@/store/registrationStore/useRegistrationStore";
import AuthPopup from "@/components/common/AuthPopup.vue";

const regStore = useRegistrationStore()

function closePopup() {
  regStore.setVisibleRegistrationPopup(false)
}
</script>

<style scoped lang="scss">
.form-registration {
  width: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-registration__text,
.form-registration__text a {
  margin-top: 18px;
  text-align: center;
  color: $dark-gray;
  font-size: 14px;
}

.form-registration__text a {
  text-decoration: underline;
}

.form-registration__text a:hover {
  text-decoration: none;
}

.form-registration__title {
  width: 100%;
  text-align: left;
  font-size: 52px;
  color: $black;
}

.reg-visible .form-registration {
  display: flex;
}

.form__submit{
  margin-top: 32px;
}
</style>