<template>
  <div class="preview-form">
    <form class="login-form" id="login-form">

      <h3 class="login-form__title">Вход в систему</h3>

      <div class="input-wrap">
        <span class="input-wrap__title">Email:</span>
        <div class="input-form">
          <input type="email" class="input-text" name="login-form__mail" title=""/>
        </div>
      </div>

      <div class="input-wrap">
        <span class="input-wrap__title">Пароль:</span>
        <div class="input-form">
          <a class="input-link" id="input-link">Забыли пароль?</a>
          <input type="password" class="input-text" name="login-form__password" title=""/>
        </div>
      </div>

      <input type="submit" class="form__submit btn blue-btn" value="Войти" title="Войти"/>

      <a href="#" class="login-form__registration-link">Нет аккаунта? Зарегистироваться</a>
    </form>
  </div>
</template>

<script setup>

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

.input-wrap {
  width: 100%;
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.input-wrap__title {
  color: $dark-gray;
  font-size: 14px;
  margin-bottom: 0.2em;
  padding-bottom: 3px;
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


.input-form,
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

.input-form:hover,
.input-form:focus-within,
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