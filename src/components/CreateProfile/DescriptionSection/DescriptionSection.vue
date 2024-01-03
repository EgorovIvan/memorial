<template>
  <div class="steep">
    <div class="steep-wrap">
      <PhotoBlock />

      <div class="input-wrap">
        <span class="input-wrap__title">Описание:</span>
        <textarea
            class="textarea-form"
            placeholder="Текст описания..."
            title=""
            :value="createProfileStore.profile.description"
            @input="createProfileStore.setDescription($event.target.value)"
        ></textarea>
      </div>

      <MainSelect
        title="Религиозные взгляды:"
        :answers="['Ислам', 'Буддизм', 'Христианство']"
        @chooseAnswer="createProfileStore.setReligion"
      />
    </div>
    <button class="save-and-next btn blue-btn" @click="nextStep">
      Сохранить и продолжить
    </button>
  </div>
</template>

<script setup>
import PhotoBlock from "@/components/CreateProfile/DescriptionSection/PhotoBlock.vue";
import MainSelect from "@/components/common/MainSelect.vue";
import {useCreateProfileStore} from "@/store/createProfileStore/useClientProfileStore";
import {computed} from "vue";
import {useNotificationStore} from "@/store/notificationStore/notificationStore";
import NotificationTypes from "@/const/NotificationTypes";

const emits = defineEmits([
    'nextStep',
])

const notification = useNotificationStore()
const createProfileStore = useCreateProfileStore()

const descriptionIsValid = computed(() => {
  return createProfileStore.profile.description.length !== 0;
})

function nextStep() {
  if (descriptionIsValid.value) {
    emits('nextStep')
  } else {
    notification.showNotification('Заполните описание профиля', NotificationTypes.WARNING)
  }
}
</script>

<style lang="scss" scoped>

</style>