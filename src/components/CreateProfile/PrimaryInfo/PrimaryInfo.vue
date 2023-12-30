<template>
  <div class="steep">
    <div class="steep-wrap grid-col-2">
      <PhotoUploader />
      <MainInput
        title="Имя"
        name="name"
        :value="createProfileStore.profile.name"
        placeholder="Иван"
        @input="createProfileStore.setName"
      />

      <MainInput
          title="Отчество:"
          name="surname"
          :value="createProfileStore.profile.surname"
          placeholder="Иванович"
          @input="createProfileStore.setSurname"
      />

      <MainInput
          title="Фамилия:"
          name="lastname"
          :value="createProfileStore.profile.lastname"
          placeholder="Иванов"
          @input="createProfileStore.setLastname"
      />
    </div>
    <div class="steep-wrap grid-col-2">
      <MainInput
          title="Дата рождения:"
          name="date_birth"
          :value="createProfileStore.profile.dateBirth"
          placeholder="дд.мм.гггг"
          @input="createProfileStore.setDateBirth"
      />

      <MainInput
          title="Место рождения:"
          name="place_birth"
          :value="createProfileStore.profile.placeBirth"
          @input="createProfileStore.setPlaceBirth"
      />

      <MainInput
          title="Дата смерти:"
          name="date_death"
          :value="createProfileStore.profile.dateDeath"
          placeholder="дд.мм.гггг"
          @input="createProfileStore.setDateDeath"
      />

      <MainInput
          title="Место захоронения:"
          name="burial_place"
          :value="createProfileStore.profile.burialPlace"
          placeholder="Укажите место захоронения"
          @input="createProfileStore.setBurialPlace"
      />

      <MainInput
          title="Причина смерти:"
          name="cause_death"
          :value="createProfileStore.profile.causeDeath"
          @input="createProfileStore.setCauseDeath"
      />

      <MainInput
          title="Свидетельство о смерти:"
          name="cause_death"
          value=""
      />
    </div>
    <div class="steep-wrap grid-col-2">
      <div class="input-wrap">
        <span class="input-wrap__title">Отец</span>

        <div class="select-form">
          <div class="select">
            <output class="select__output"
            >Выберите из списка</output
            >
            <ul class="select-list">
              <li class="select-list__item">
                Алексеев Алексей Алексеевич
              </li>
            </ul>
          </div>
          <svg aria-hidden="true" class="select-arrow">
            <path
                d="M7 7.8c-.2 0-.4-.1-.6-.2L.8 2 2 .8l5 5 5-5L13.2 2 7.6 7.6c-.2.2-.4.2-.6.2z"
            />
          </svg>
        </div>
      </div>
      <div class="input-wrap">
        <span class="input-wrap__title">Мать</span>

        <div class="select-form">
          <div class="select">
            <output class="select__output">Выберите из списка</output>
            <ul class="select-list">
              <li class="select-list__item">
                Алексеев Алексей Алексеевич
              </li>
              <li class="select-list__item">
                Алексеев Алексей Алексеевич
              </li>
              <li class="select-list__item">
                Алексеев Алексей Алексеевич
              </li>
            </ul>
          </div>

          <svg aria-hidden="true" class="select-arrow">
            <path
                d="M7 7.8c-.2 0-.4-.1-.6-.2L.8 2 2 .8l5 5 5-5L13.2 2 7.6 7.6c-.2.2-.4.2-.6.2z"
            />
          </svg>
        </div>
      </div>
      <div class="input-wrap">
        <span class="input-wrap__title">Супруг / Супруга</span>

        <div class="select-form">
          <div class="select">
            <output class="select__output"
            >Выберите из списка</output
            >
            <ul class="select-list">
              <li class="select-list__item">
                Алексеев Алексей Алексеевич
              </li>
              <li class="select-list__item">
                Алексеев Алексей Алексеевич
              </li>
            </ul>
          </div>
          <svg aria-hidden="true" class="select-arrow">
            <path
                d="M7 7.8c-.2 0-.4-.1-.6-.2L.8 2 2 .8l5 5 5-5L13.2 2 7.6 7.6c-.2.2-.4.2-.6.2z"
            />
          </svg>
        </div>
      </div>
      <div class="input-wrap">
        <span class="input-wrap__title">Выпадающий список</span>

        <select name="" id="">
          <option disabled selected>Выбирите значение</option>
          <option>Выпадающее значение №1</option>
          <option>Выпадающее значение №2</option>
          <option>Выпадающее значение №3</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
import MainInput from "@/components/common/MainInput.vue";
import PhotoUploader from "@/components/CreateProfile/PrimaryInfo/PhotoUploader.vue";
import {useCreateProfileStore} from "@/store/createProfileStore/useClientProfileStore";

const createProfileStore = useCreateProfileStore()
</script>