<template>
  <div class="preview-form">
    <form class="login-form" id="login-form">

      <h3 class="login-form__title">Вход в систему</h3>

      <MainInput
          :value="''"
          title="Email:"
      />

      <MainInput
          :value="''"
          title="Пароль:"
      >
        <template #link>
          <a class="input-link">Забыли пароль?</a>
        </template>
      </MainInput>

      <input type="submit" class="form__submit btn blue-btn" value="Войти" title="Войти"/>

      <a href="#" class="login-form__registration-link">Нет аккаунта? Зарегистироваться</a>
    </form>
  </div>
</template>

<script setup>

import MainInput from "@/components/common/MainInput.vue";
</script>

<style lang="scss" scoped>

.preview-form {
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: relative;
}

.preview-form:after {
  content: "";
  height: 100%;
  width: 1000%;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 100%;
}

.preview-form,
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-form {
  width: 340px;
}

.login-form__title {
  line-height: 1.3;
  color: $black;
  text-align: left;
  width: 100%;
  font: 900 22px sans-serif;
}

.form__submit {
  line-height: 1.3;
  font: 600 14px sans-serif;
  margin-top: 32px;
  min-width: 160px;
}

.login-form__registration-link {
  margin-top: 40px;
  color: $blue;
  font-size: 14px;
}

.login-form__registration-link:hover {
  text-decoration: underline;
}


.select-form,
.textarea-form {
  width: 100%;
  height: 44px;
  padding: 6.4px 17.6px;
  background-color: $gray;
  border: 1px solid #cdd1d6;
  border-radius: 7px;
  transition: $normal;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
}


.select-form:hover,
.select-form:focus-within,
.textarea-form,
.textarea-form:focus-within {
  border: 1px solid $blue;
}

.textarea-form {
  min-height: 110px;
  resize: vertical;
}

.select-form {
  position: relative;
  padding-right: 30px;
  cursor: pointer;
}

select {
  width: 100%;
  padding: 13px 15px 13px 15px;
  height: 44px;
  background-color: $gray;
  border: 1px solid #cdd1d6;
  border-radius: 7px;
}

.input-link {
  color: $blue;
  font-size: 14px;
  cursor: pointer;
}

.input-link:hover {
  text-decoration: underline;
}

.input-link + .input-text {
  width: calc(100% - 120px);
}

.input-text {
  width: 100%;
  color: $black;
  font-size: 16px;
  background-color: transparent;
  border: none;
}

.no-valid {
  border-color: $red;
}

.no-valid ~ .is-invalid {
  display: block;
}

.is-invalid {
  display: none;
  color: $red;
  padding-left: 18px;
  font-size: 12px;
  margin: 2.4px 0 0;
  position: relative;
}

.is-invalid:before {
  content: "";
  border-radius: 50%;
  height: 4px;
  left: 7px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  background-color: $red;
}
</style>