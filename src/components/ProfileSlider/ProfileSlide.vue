<template>
  <div class="profile-slide">
    <div class="profile-slide-wrapper-photo">
      <img
        v-if="isCreateSlide"
        class="profile-slide__photo"
        src="./../../assets/img/plus.svg"
        alt="plus"
      />
      <img
        v-else
        class="profile-slide__photo"
        :src="photo"
        alt="photo"
      />
    </div>
    <p v-if="!isCreateSlide" class="profile-slide__years">
      {{ dateBirth }} - {{ dateDeath }} г.
    </p>
    <p class="profile-slide__name">
      {{ getName }}
    </p>
  </div>
</template>

<script setup>
  import {computed} from "vue";

  const props = defineProps({
    photo: {
      type: String,
      default: '',
    },
    dateBirth: {
      type: Number,
      default: 0,
    },
    dateDeath: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      default: '',
    },
    isCreateSlide: {
      type: Boolean,
      default: false,
    },
  })

  const getName = computed(() => {
    return props.isCreateSlide ? 'Create a profile' : props.name
  })
</script>

<style lang="scss" scoped>
  .profile-slide {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    cursor: pointer;

    &-wrapper-photo {
      width: 100px;
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

    &__years,
    &__name {
      color: $black;
      text-align: center;
      font-family: "Lato", sans-serif;
      font-size: 12px;
      line-height: 131.5%;
    }

    &__years {
      font-weight: 400;
    }

    &__name {
      font-weight: 600;
    }
  }
</style>