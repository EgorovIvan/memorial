<template>
  <div class="user-avatar">
    <div class="preview-avatar">
      <label class="preview-avatar-wrap" :style="{backgroundImage: `url(${photoBackground})`}">
        <input
          type="file"
          accept=".jpg,.jpeg,.png"
          class="input-avatar"
          id="change-avatar"
          @change="setPhoto"
        />
        <span
          v-if="!photoUploaded"
          class="preview-avatar-wrap__text"
        >
          Выберите фото
        </span>
      </label>
      <label class="preview-avatar__icon" for="change-avatar">
        <svg>
          <path
              class="st0"
              d="M18.1 19.1h-15c-.8 0-1.6-.3-2.2-.9-.6-.6-.9-1.4-.9-2.3V6.3c0-.8.3-1.6.9-2.2s1.4-.9 2.2-.9h1c.2 0 .4 0 .5-.1.2-.1.4-.2.5-.4L6 1.4c.3-.4.7-.8 1.1-1C7.5.1 8 0 8.5 0h4.1c.5 0 1 .1 1.5.4.5.2.8.6 1.1 1l.9 1.3c.1.2.2.3.4.4s.3.1.5.1h1c.8 0 1.6.3 2.2.9.6.6.9 1.4.9 2.2v9.6c0 .8-.3 1.6-.9 2.2-.5.6-1.3 1-2.1 1zM3.1 5.2c-.3 0-.6.1-.8.3S2 6 2 6.3v9.6c0 .3.1.6.3.8.2.2.5.3.8.3H18c.3 0 .6-.1.8-.3.2-.2.3-.5.3-.8V6.3c0-.3-.1-.6-.3-.8-.2-.2-.5-.3-.8-.3h-1c-.5 0-1-.1-1.5-.4-.5-.2-.8-.6-1.1-1l-.9-1.3c-.1-.2-.2-.3-.4-.4s-.2-.1-.4-.1H8.5c-.1 0-.3 0-.5.1s-.3.3-.4.4l-.9 1.3c-.3.4-.7.8-1.1 1-.5.2-1 .4-1.5.4h-1z"
          />
          <path
              class="st0"
              d="M10.6 14.8c-1.1 0-2.2-.4-3-1.2-.8-.8-1.2-1.8-1.2-3 0-1.1.4-2.2 1.2-3 .8-.8 1.9-1.2 3-1.2s2.2.4 3 1.2c.8.8 1.2 1.9 1.2 3s-.4 2.2-1.2 3-1.9 1.2-3 1.2zm0-6.4c-.6 0-1.1.2-1.6.6-.4.4-.6 1-.6 1.6 0 .6.2 1.1.6 1.6.8.8 2.3.8 3.1 0 .4-.4.6-1 .6-1.6s-.2-1.1-.6-1.6c-.3-.4-.9-.6-1.5-.6z"
          />
        </svg>
      </label>
    </div>
    <button
      v-if="photoUploaded"
      @click="deletePhoto"
      type="button"
      class="delete-avatar"
    >
      Удалить фото
    </button>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import {useCreateProfileStore} from "@/store/createProfileStore/useClientProfileStore";

const createProfileStore = useCreateProfileStore()
const photoBackground = ref(null);

const photoUploaded = computed(() => photoBackground.value !== null)

function setPhoto(event) {
  const photo = event.target.files[0]
  if (!photo) return
  photoBackground.value = window.URL.createObjectURL(photo);
  createProfileStore.setPhoto(photo)
}

function deletePhoto() {
  photoBackground.value = null;
  createProfileStore.setPhoto(null);
}
</script>