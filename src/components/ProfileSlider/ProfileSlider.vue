<template>
  <div class="profile-slider">
    <div class="profile-slider-header">
      <p class="profile-slider__title">
        {{ $t(titleKey) }}
      </p>
      <div class="profile-slider-navigation">
        <img
            ref="prev"
            class="profile-slider__arrow profile-slider__arrow_prev"
            src="./../../assets/img/slider-arrow.svg"
            alt="arrow"
        />
        <img
            ref="next"
            class="profile-slider__arrow profile-slider__arrow_next"
            src="./../../assets/img/slider-arrow.svg"
            alt="arrow"
        />
      </div>
    </div>
    <Swiper
        :modules="[Navigation]"
        :slides-per-view="4"
        :navigation="{
          prevEl: prev,
          nextEl: next,
        }"
    >
      <SwiperSlide
          v-for="profile in profiles"
          :key="profile.id"
          :virtualIndex="profile.id"
      >
        <ProfileSlide
            :name="profile.full_name"
            :date-death="profile.date_birth"
            :date-birth="profile.date_death"
            :photo="profile.avatar"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
  import {Swiper, SwiperSlide} from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import ProfileSlide from "@/components/ProfileSlider/ProfileSlide.vue";
  import {ref} from "vue";
  import {Navigation} from "swiper/modules";

  defineProps({
    titleKey: {
      type: String,
      required: true,
    },
    profiles: {
      type: Array,
      required: true,
    },
  })

  const prev = ref(null);
  const next = ref(null);
</script>

<style scoped lang="scss">
  .profile-slider {
    background: #FFF;
    max-width: 700px;
    padding: 14px 21px 26px;
    border: 1px solid $light-gray;
    border-radius: 7px;

    &-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    &__title {
      color: $black;
      font-family: "Lato", sans-serif;
      font-size: 18px;
      font-weight: 600;
      line-height: 131.5%;
    }

    &__arrow {
      cursor: pointer;
      transition: .15s ease-in-out;
      
      &.swiper-button-disabled {
        opacity: .3;
      }

      &_prev {
        transform: rotate(180deg);
      }
    }
  }
</style>