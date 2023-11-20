<template>
  <div class="preview-form">
    <form class="login-form" @submit.prevent="loginUser">
      <h3 class="login-form__title">
        {{ $t('loginPage.previewForm.title') }}
      </h3>
      <MainInput
          :value="userInfo.email"
          :valid="emailIsValid || !formSubmitted"
          @input="setEmail"
          name="email"
          title="Email:"
      />
      <MainInput
          :value="userInfo.password"
          :valid="passwordIsValid || !formSubmitted"
          @input="setPassword"
          title="Пароль:"
          name="password"
          type="password"
      >
        <template #link>
          <span @click="regStore.setVisiblePasswordRecoverPopup(true)" class="input-link">
            {{ $t('loginPage.previewForm.forgotPassword') }}
          </span>
        </template>
      </MainInput>
      <input type="submit" class="form__submit btn blue-btn" :value="$t('loginPage.previewForm.loginButton')" title="Войти"/>
      <span
        @click="openRegPopup"
        class="login-form__registration-link"
      >
        {{ $t('loginPage.previewForm.registerAccount') }}
      </span>
    </form>
  </div>
</template>

<script setup>
import MainInput from "@/components/common/MainInput.vue";
import {useRegistrationStore} from "@/store/registrationStore/useRegistrationStore";
import {computed, onMounted, reactive, ref} from "vue";
import api from "@/api/auth/api";
import getUA from "@/utils/getUA";
import {useRouter} from "vue-router";

const router = useRouter()
const regStore = useRegistrationStore()
const userInfo = reactive({
  email: '',
  password: '',
  fcmToken: '',
})
const formSubmitted = ref(false)

const emailIsValid = computed(() => {
  return userInfo.email.length !== 0
})

const passwordIsValid = computed(() => {
  return userInfo.password.length !== 0
})

async function loginUser() {
  formSubmitted.value = true

  if (!emailIsValid.value || !passwordIsValid.value) return

  userInfo.fcmToken = getFcmToken()
  try {
    const res = await api.login({
      ...userInfo,
      deviceName: getUA(),
    })
    console.log(res)
    router.push('/')
  } catch (e) {
    const code = e.response?.status;
     if (code === 404) {
      alert('Введен неправильно пароль или логин')
    } else {
      alert('Произошла ошибка на сервере')
    }
  }
}

function openRegPopup() {
  regStore.setVisibleRegistrationPopup(true)
}

function setEmail(email) {
  userInfo.email = email
}

function setPassword(password) {
  userInfo.password = password
}

function getFcmToken() {
  return localStorage.fcmToken || ''
}

onMounted(() => {

  const formData = new FormData()
  formData.append('test', '123');
  fetch('/123', {
    method: "POST",
    body: formData,
  })
})
</script>

<style lang="scss" scoped>

.preview-form {
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: relative;

  @media screen and (max-width: 768px) {
    padding: 32px 20px 48px;
  }
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

  @media screen and (max-width: 480px) {
    width: 100%;
  }
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
  cursor: pointer;
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