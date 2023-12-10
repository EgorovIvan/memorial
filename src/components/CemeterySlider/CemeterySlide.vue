<template>
  <div :class="getClassesSlide">
    <div class="cemetery-slide-wrapper-photo">
      <img
          v-if="!isCreateSlide"
          class="cemetery-slide__photo"
          :src="banner"
          alt="photo"
      />
    </div>
    <img
        class="cemetery-slide__avatar"
        :src="getAvatar"
        alt="avatar"
    />
    <p class="cemetery-slide__title">
      {{ isCreateSlide ? getName : title }}
    </p>
    <p class="cemetery-slide__subtitle">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
  banner: {
    type: String,
    default: '',
  },
  avatar: {
    type: String,
    default: '',
  },
  isCreateSlide: {
    type: Boolean,
    default: false,
  },
})

const getClassesSlide = computed(() => {
  return ['cemetery-slide', {'cemetery-slide_create': props.isCreateSlide}]
})

const getName = computed(() => {
  return props.isCreateSlide ? 'Create a cemetery' : props.name
})

const getAvatar = computed(() => {
  return props.isCreateSlide ? require('./../../assets/img/plus.svg') : props.avatar
})
</script>

<style lang="scss" scoped>
.cemetery-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background: #F4F7FA;
  max-width: 150px;

  &_create {
    height: 100%;

    .cemetery-slide__avatar {
      padding: 10px;
      background: #fff;
      bottom: 40px;
    }
  }

  &-wrapper-photo {
    width: 100%;
    height: 135px;
    overflow: hidden;
    border-radius: 5px;
    position: relative;
    background: $light-gray;
  }

  &__photo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__title,
  &__subtitle{
    overflow: hidden;
    color: var(--black, #201E1F);
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: "Lato", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 131.5%;
    padding: 0 5px 0 10px;
    max-width: 100%;
  }

  &__title {
    margin-top: 15px;
  }

  &__subtitle {
    opacity: .7;
  }

  &__avatar {
    border-radius: 75px;
    width: 40px;
    height: 40px;
    position: absolute;
    left: 10px;
    bottom: 32px;
  }
}
</style>