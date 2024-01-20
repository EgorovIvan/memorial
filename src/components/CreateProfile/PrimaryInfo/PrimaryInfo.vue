<template>
  <div class="steep">
    <div class="steep-wrap grid-col-2">
      <PhotoUploader />
      <MainInput
        title="Имя"
        name="name"
        :value="createProfileStore.profile.name"
        placeholder="Иван"
        :valid="nameIsValid || !submit"
        @input="createProfileStore.setName"
      />

      <MainInput
          title="Отчество:"
          name="surname"
          :value="createProfileStore.profile.surname"
          placeholder="Иванович"
          :valid="surnameIsValid || !submit"
          @input="createProfileStore.setSurname"
      />

      <MainInput
          title="Фамилия:"
          name="lastname"
          :value="createProfileStore.profile.lastname"
          placeholder="Иванов"
          :valid="lastNameIsValid || !submit"
          @input="createProfileStore.setLastname"
      />
    </div>
    <div class="steep-wrap grid-col-2">
      <MainInput
          title="Дата рождения:"
          name="date_birth"
          :value="createProfileStore.profile.dateBirth"
          :mask="'##.##.####'"
          placeholder="дд.мм.гггг"
          :valid="dateBirthIsValid || !submit"
          @input="createProfileStore.setDateBirth"
      />

      <MainInput
          title="Место рождения:"
          name="place_birth"
          :value="createProfileStore.profile.placeBirth"
          @input="createProfileStore.setPlaceBirth"
          :valid="placeBirthIsValid || !submit"
      />

      <MainInput
          title="Дата смерти:"
          name="date_death"
          :value="createProfileStore.profile.dateDeath"
          :mask="'##.##.####'"
          placeholder="дд.мм.гггг"
          :valid="dateDeathIsValid || !submit"
          @input="createProfileStore.setDateDeath"
      />

      <MainInput
          title="Место захоронения:"
          name="burial_place"
          :disable="true"
          :value="createProfileStore.profile.burialPlace"
          placeholder="Укажите место захоронения"
          @input="createProfileStore.setBurialPlace"
          @click="visibleMapPopup = true"
      />

      <MapPopup
        v-if="visibleMapPopup"
        :visible="visibleMapPopup"
        @setPlace="setPlace"
        @close="visibleMapPopup = false"
      />

      <MainInput
          title="Причина смерти:"
          name="cause_death"
          :valid="causeDeathIsValid || !submit"
          :value="createProfileStore.profile.causeDeath"
          @input="createProfileStore.setCauseDeath"
      />

      <label class="input-wrap">
        <span class="input-wrap__title">
          Свидетельство о смерти:
        </span>
        <div class="input-form">
          {{ createProfileStore.getDeathCertificateName }}
          <input
            @change="setDeathCertificate"
            hidden
            type="file"
            class="input-text"
            accept=".pdf"
          />
        </div>
      </label>
    </div>

    <div class="steep-wrap grid-col-2">
      <MainSelect
        title="Отец"
        :answers="getFatherNames"
        @chooseAnswer="setFather"
      />
      <MainSelect
        title="Мать"
        :answers="getMotherNames"
        @chooseAnswer="setMother"
      />
      <MainSelect
        title="Супруг / Супруга"
        :answers="getWifeNames"
        @chooseAnswer="setWife"
      />
    </div>

    <button class="save-and-next btn blue-btn" @click="nextStep">
      Сохранить и продолжить
    </button>
  </div>
</template>

<script setup>
import MainInput from "@/components/common/MainInput.vue";
import PhotoUploader from "@/components/CreateProfile/PrimaryInfo/PhotoUploader.vue";
import {useCreateProfileStore} from "@/store/createProfileStore/useClientProfileStore";
import MainSelect from "@/components/common/MainSelect.vue";
import {computed, onMounted, reactive, ref} from "vue";
import api from "@/api/createProfile/api";
import {useNotificationStore} from "@/store/notificationStore/notificationStore";
import NotificationTypes from "@/const/NotificationTypes";
import {useI18n} from "vue-i18n";
import MapPopup from "@/components/CreateProfile/PrimaryInfo/MapPopup.vue";

const emits = defineEmits([
    'nextStep',
])

const {t} = useI18n()
const notification = useNotificationStore()
const createProfileStore = useCreateProfileStore()
const submit = ref(false);
const linkedProfiles = reactive({
  father: [],
  mother: [],
  wife: [],
})
const visibleMapPopup = ref(false);

const getFatherNames = computed(() => {
  return linkedProfiles.father.map((profile) => {
    return {id: profile.id, value: profile.full_name}
  })
})

const getMotherNames = computed(() => {
  return linkedProfiles.mother.map((profile) => {
    return {
      id: profile.id,
      value: profile.full_name,
    }
  })
})

const getWifeNames = computed(() => {
  return linkedProfiles.wife.map((profile) => {
    return {
      id: profile.id,
      value: profile.full_name,
    }
  })
})

const nameIsValid = computed(() => !isEmpty(createProfileStore.profile.name))
const surnameIsValid = computed(() => !isEmpty(createProfileStore.profile.surname))
const lastNameIsValid = computed(() => !isEmpty(createProfileStore.profile.lastname))
const dateBirthIsValid = computed(() => !isEmpty(createProfileStore.profile.dateBirth))
const placeBirthIsValid = computed(() => !isEmpty(createProfileStore.profile.placeBirth))
const dateDeathIsValid = computed(() => !isEmpty(createProfileStore.profile.dateDeath))
const causeDeathIsValid = computed(() => !isEmpty(createProfileStore.profile.causeDeath))

const requiredFieldsIsValid = computed(() => {
  return nameIsValid.value &&
      surnameIsValid.value &&
      lastNameIsValid.value &&
      dateBirthIsValid.value &&
      placeBirthIsValid.value &&
      dateDeathIsValid.value &&
      causeDeathIsValid.value
})

function setFather(id) {
  const father = linkedProfiles.father.find(father => father.id === id)
  createProfileStore.setFatherId(father.id)
}

function setMother(id) {
  const mother = linkedProfiles.mother.find(mother => mother.id === id)
  createProfileStore.setMotherId(mother.id)
}

function setWife(id) {
  const wife = linkedProfiles.wife.find(wife => wife.id === id)
  createProfileStore.setWifeId(wife.id)
}

function setPlace({ placeName, coords }) {
  if (placeName.value.length === 0) {
    return notification.showNotification('Выберите место захоронения', NotificationTypes.WARNING)
  }
  createProfileStore.setBurialCoords(coords.value)
  createProfileStore.setBurialPlace(placeName.value)
  visibleMapPopup.value = false
}

function setDeathCertificate(event) {
  createProfileStore.setDeathCertificate(event.target.files[0])
}

function isEmpty(value) {
  return value.length === 0
}

function nextStep() {
  submit.value = true;

  if (requiredFieldsIsValid.value) {
    emits('nextStep');
  }
}

onMounted(async () => {
  try {
    linkedProfiles.father = (await api.getLinkedProfiles('male')).humans
    linkedProfiles.mother = (await api.getLinkedProfiles('female')).humans
    linkedProfiles.wife = (await api.getLinkedProfiles()).humans
  } catch (e) {
    console.log(e)
    notification.showNotification(t('notifications.serverError'), NotificationTypes.ERROR)
  }
})
</script>