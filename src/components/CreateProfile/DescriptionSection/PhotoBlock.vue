<template>
  <div class="input-wrap">
    <span class="input-wrap__title">Фотографии и видео:</span>
    <div class="input-photo">
      <div
        v-for="(preview, index) in getFilesPreview"
        :key="index"
        class="input-photo-preview"
      >
        <button type="button" class="delete-resource">
          <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.41421 0.585779C2.63316 -0.19527 1.36684 -0.19527 0.585786 0.585779C-0.195262 1.36683 -0.195262 2.63316 0.585786 3.41421L7.17157 9.99999L0.585787 16.5858C-0.195262 17.3668 -0.195262 18.6332 0.585787 19.4142C1.36684 20.1953 2.63316 20.1953 3.41421 19.4142L10 12.8284L16.5858 19.4142C17.3668 20.1953 18.6332 20.1953 19.4142 19.4142C20.1953 18.6332 20.1953 17.3668 19.4142 16.5858L12.8284 9.99999L19.4142 3.41421C20.1953 2.63316 20.1953 1.36683 19.4142 0.585779C18.6332 -0.19527 17.3668 -0.19527 16.5858 0.585779L10 7.17157L3.41421 0.585779Z"
                fill="white"
            />
          </svg>
        </button>
        <input
          type="file"
          hidden="hidden"
          name="load-resource"
        />
        <span
          v-if="isVideo(getExtension(preview.file.name))"
          class="filename"
        >
          {{ preview.file.name }}
        </span>
        <img
          v-else
          class="bg-img"
          :src="preview.background"
          alt="image"
        />
      </div>
      <label class="input-photo-load">
        <svg
            style="width: 20px; height: 20px"
            aria-hidden="true"
        >
          <path
              d="M10.5 21c-.6 0-1-.4-1-1v-8.5H1c-.6 0-1-.4-1-1s.4-1 1-1h8.5V1c0-.6.4-1 1-1s1 .4 1 1v8.5H20c.6 0 1 .4 1 1s-.4 1-1 1h-8.5V20c0 .6-.4 1-1 1z"
          />
        </svg>
        <span class="input-photo-load__text">
          Добавить фото/видео
        </span>
        <input
            @change="addPhoto"
            type="file"
            class="load-files"
            accept=".jpg,.jpeg,.png,.mp4,.webp"
            multiple
        />
      </label>
    </div>
  </div>
</template>

<script setup>
import {useCreateProfileStore} from "@/store/createProfileStore/useClientProfileStore";
import {computed} from "vue";

const createProfileStore = useCreateProfileStore()

const getFilesPreview = computed(() => {
  return createProfileStore.profile.additionalPhotos.map((file) => {
    return {
      background: window.URL.createObjectURL(file),
      file,
    }
  })
})

function getExtension(filename) {
  return filename.split('.').pop();
}

function isVideo(format) {
  const videoFormats = ['mp4', 'webm']
  return videoFormats.includes(format)
}

function addPhoto(event) {
  const file = event.target.files[0]
  if (!file) return
  createProfileStore.addAdditionalPhoto(file)
}
</script>

<style lang="scss" scoped>
.filename {
  text-overflow: ellipsis;
  width: 75px;
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
}
</style>