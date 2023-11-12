<template>
  <AuthPopup
    :visible="regStore.visibleRegistrationPopup"
    @close="closePopup"
  >
    <template #content>
      <form @submit.prevent="registrationUser" class="form-registration">
        <h3 class="form-registration__title">Регистрация</h3>
        <MainInput
            :value="userInfo.username"
            :valid="usernameIsValid || !formSubmitted"
            title="ФИО:"
            @input="setUserName"
        />
        <MainInput
            :value="userInfo.email"
            :valid="emailIsValid || !formSubmitted"
            title="Email:"
            @input="setEmail"
        />
        <MainInput
            :value="userInfo.phone"
            :valid="phoneIsValid || !formSubmitted"
            title="Телефон:"
            @input="setPhone"
        />
        <MainInput
            :value="userInfo.password"
            :valid="passwordIsValid || !formSubmitted"
            title="Пароль:"
            type="password"
            @input="setPassword"
        />
        <MainInput
            :value="userInfo.confirmPassword"
            :valid="confirmPasswordIsValid || !formSubmitted"
            title="Повторите пароль:"
            type="password"
            @input="setConfirmPassword"
        />
        <input
          type="submit"
          class="form__submit btn blue-btn"
          value="Зарегистрироваться"
        />
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
import {computed, reactive, ref} from "vue";
import api from "@/api/auth/api";
import {useRouter} from "vue-router";
import {getToken, getMessaging} from "firebase/messaging";
import requestPermission from "@/utils/requestPermission";
import getUA from "@/utils/getUA";

const router = useRouter()
const regStore = useRegistrationStore()
const formSubmitted = ref(false)
const userInfo = reactive({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  phone: '',
  deviceName: '',
  location: '',
  fcmToken: '',
})

async function registrationUser() {
  formSubmitted.value = true
  if (!formIsValid.value) return

  userInfo.deviceName = getUA()
  const notificationPermission = await requestPermission();
  if (notificationPermission) {
    userInfo.fcmToken = await getFirebaseToken();
  }

  try {
    const res = await api.registration(userInfo)
    console.log(res)
    router.push('/')
  } catch (e) {
    const code = e.response?.code;
    if (code === 422) {
      alert('Email уже занят')
    } else {
      alert('Произошла ошибка на сервере')
    }
  }
}

async function getFirebaseToken() {
  const messaging = getMessaging();
  try {
    const token = await getToken(messaging, { vapidKey: 'BHQHjYlp3-LViMyhDaO5nr8t1-o5LFQ3MkoueeqWN0YUR6gwueAcRemR1lYW9uBBZ4QWQH3JGNKCJdgFGhUGiWY' })
    if (token) {
      console.log(token)
      return token
    }
    console.log('No registration token available. Request permission to generate one.');
    return ''
  } catch (e) {
    console.log('An error occurred while retrieving token. ', e);
  }
}

const formIsValid = computed(() => {
  return usernameIsValid.value &&
      emailIsValid.value &&
      passwordIsValid.value &&
      confirmPasswordIsValid.value &&
      phoneIsValid.value
})

const usernameIsValid = computed(() => {
  return userInfo.username.length !== 0
})

const emailIsValid = computed(() => {
  return Boolean(userInfo.email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ));
})

const passwordIsValid = computed(() => {
  return userInfo.password.length >= 6
})

const confirmPasswordIsValid = computed(() => {
  return userInfo.confirmPassword === userInfo.password
})

const phoneIsValid = computed(() => {
  return userInfo.phone.length !== 0
})

function setUserName(name) {
  userInfo.username = name
}

function setPassword(password) {
  userInfo.password = password
}

function setConfirmPassword(confirmPassword) {
  userInfo.confirmPassword = confirmPassword
}

function setPhone(phone) {
  userInfo.phone = phone
}

function setEmail(email) {
  userInfo.email = email
}

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