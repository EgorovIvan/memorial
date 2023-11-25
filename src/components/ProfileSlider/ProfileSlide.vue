<template>
  <div class="profile-slide">
    <div class="profile-slide-wrapper-photo">
      <img class="profile-slide__photo" :src="photo" alt="photo" />
    </div>
    <p class="profile-slide__years">
      {{ dateBirth }} - {{ dateDeath }} г.
    </p>
    <p class="profile-slide__name">
      {{ name }}
    </p>
  </div>
</template>

<script setup>
  defineProps({
    photo: {
      type: String,
      required: true,
    },
    dateBirth: {
      type: Number,
      required: true,
    },
    dateDeath: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  })
</script>

<style lang="scss" scoped>
  .profile-slide {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;

    &-wrapper-photo {
      width: 95px;
      height: 95px;
      overflow: hidden;
      border-radius: 50%;
      position: relative;
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