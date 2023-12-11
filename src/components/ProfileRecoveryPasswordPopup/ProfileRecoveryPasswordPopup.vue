<template>
  <AuthPopup
      :visible="props.visible"
      position="top"
      @close="emits('close')"
  >
    <template #content>
      <form class="form-recover" @submit.prevent="emits('changePassword', {password, confirmPassword})">
        <h3 class="form-recover__title">
          {{ $t('loginPage.passwordRecovery.title') }}
        </h3>
        <div class="form-recover-wrap">
          <p>{{ $t('loginPage.passwordRecovery.description') }}</p>
          <MainInput
              :value="password"
              :title="t('profilePage.passwordRecovery.newPassword')"
              class="form-recover__input"
              type="password"
              name="password"
              @input="setPassword"
          />
          <MainInput
              :value="confirmPassword"
              :title="t('profilePage.passwordRecovery.confirmPassword')"
              class="form-recover__input"
              name="passwordConfirm"
              type="password"
              @input="setConfirmPassword"
          />
          <input
              type="submit"
              class="form__submit blue-btn btn"
              :value="$t('loginPage.passwordRecovery.submit')"
          >
        </div>
      </form>
    </template>
  </AuthPopup>
</template>

<script setup>
import AuthPopup from "@/components/common/AuthPopup.vue";
import MainInput from "@/components/common/MainInput.vue";
import {ref} from "vue";
import {useI18n} from "vue-i18n";

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
})

const emits = defineEmits([
    'close',
    'changePassword',
])

const { t } = useI18n()
const password = ref('')
const confirmPassword = ref('')

function setPassword(inputPassword) {
  password.value = inputPassword
}

function setConfirmPassword(inputPassword) {
  confirmPassword.value = inputPassword
}
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

    @media screen and (max-width: 1120px) {
      font-size: 4vw;
    }

    @media screen and (max-width: 980px) {
      font-size: 32px;
      margin-bottom: 20px;
    }

    @media screen and (max-width: 560px) {
      font-size: 22px;
      margin-bottom: 10px;
    }
  }

  @media screen and (max-width: 980px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
}

@media screen and (max-width: 768px) {
  .form-recover-wrap .form__submit {
    width: 100%;
  }
}
</style>