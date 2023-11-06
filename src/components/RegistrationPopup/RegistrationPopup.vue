<template>
  <div class="preview-modal" id="modal-from">
    <div class="aside-form" id="form-aside">
      <button type="button" class="close-registration" id="close-aside"></button>

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
          <a href="#">политики обработки персональных данных</a></p>
      </form>
    </div>
  </div>
</template>

<script setup>

import MainInput from "@/components/common/MainInput.vue";
</script>

<style scoped lang="scss">

.preview-modal {
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 81%, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  z-index: -150;
  overflow: hidden;
}

.preview-modal.open {
  opacity: 1;
  visibility: visible;
  z-index: 150;
  display: flex;
}

.preview-modal.aside-top {
  justify-content: center;
  align-items: flex-start;
}

.preview-modal.aside-right {
  justify-content: flex-end;
  align-items: flex-start;
}

.preview-modal.aside-top .form-registration,
.preview-modal.aside-right .form-recover,
.preview-modal.aside-menu .form-registration,
.preview-modal.aside-menu .form-recover {
  display: none;
}

.preview-modal.aside-top .aside-form {
  width: 100%;
  padding: 64px $content-size 80px;
  height: auto;
  justify-content: flex-start;
}

.aside-form {
  width: 536px;
  background-color: #fff;
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  transition: $normal;
  padding-top: 64px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 100;
}

.aside-form.hide {
  display: none;
}

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

.close-registration {
  position: absolute;
  top: 9px;
  right: 9px;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  border: 1px solid $light-gray;
  transition: $normal;
}

.close-registration:before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.close-registration:after,
.close-registration:before {
  content: "";
  border-radius: 1px;
  height: 2px;
  left: 50%;
  position: absolute;
  top: 50%;
  width: 16px;
  background-color: $black;
}

.close-registration:after {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.close-registration:hover {
  opacity: 0.65;
}

.reg-visible .form-registration {
  display: flex;
}

.form-recover {
  width: 100%;
  max-width: 1220px;
  display: grid;
  grid-template-columns: 1fr 520px;
  grid-column-gap: 10px;
  justify-content: flex-start;
}

.form-recover__title {
  font: 900 52px sans-serif;
  line-height: 1.3;
  color: $black;
}

.list,
.member-card,
.pet-card-wrap {
  background-color: $gray;
}
</style>