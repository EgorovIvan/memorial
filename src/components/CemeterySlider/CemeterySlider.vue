<template>
  <div class="cemetery-slider">
    <div class="cemetery-slider-header">
      <p class="cemetery-slider__title">
        {{ getTitle }}
        <template v-if="showCountProfiles">
          {{ getCountProfiles }}
        </template>
      </p>
      <div class="cemetery-slider-navigation">
        <img
            ref="prev"
            class="cemetery-slider__arrow cemetery-slider__arrow_prev"
            src="./../../assets/img/slider-arrow.svg"
            alt="arrow"
        />
        <img
            ref="next"
            class="cemetery-slider__arrow cemetery-slider__arrow_next"
            src="./../../assets/img/slider-arrow.svg"
            alt="arrow"
        />
      </div>
    </div>
    <Swiper
        :modules="[Navigation]"
        :slides-per-view="'auto'"
        :breakpoints="breakpoints"
        :space-between="10"
        :navigation="{
          prevEl: prev,
          nextEl: next,
        }"
    >
      <SwiperSlide
          v-for="profile in profiles"
          :key="profile.id"
          :virtualIndex="profile.id"
          class="cemetery-slide"
      >
        <CemeterySlide
            :title="profile.title"
            :subtitle="profile.subtitle"
            :avatar="profile.avatar"
            :banner="profile.banner"
        />
      </SwiperSlide>
      <SwiperSlide
        :style="{height: 'auto'}"
        class="cemetery-slide"
      >
        <CemeterySlide
            :is-create-slide="true"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import {computed, ref} from "vue";
import {Navigation} from "swiper/modules";
import {useI18n} from "vue-i18n";
import CemeterySlide from "@/components/CemeterySlider/CemeterySlide.vue";

const props = defineProps({
  titleKey: {
    type: String,
    required: true,
  },
  profiles: {
    type: Array,
    required: true,
    default: () => [],
  },
  showCountProfiles: {
    type: Boolean,
    default: false,
  },
})

const { t } = useI18n()
const prev = ref(null);
const next = ref(null);

const breakpoints = computed(() => {
  return {
    768: {
      slidesPerView: 4,
    },
  }
})

const getTitle = computed(() => {
  return t(props.titleKey)
})

const getCountProfiles = computed(() => {
  return `(${props.profiles.length})`
})
</script>

<style scoped lang="scss">
.cemetery-slider {
  background: #FFF;
  max-width: 700px;
  padding: 14px 21px 26px;
  border: 1px solid $light-gray;
  border-radius: 7px;
  min-width: 700px;

  @media screen and (max-width: 997px) {
    max-width: 500px;
    min-width: 500px;
  }

  @media screen and (max-width: 695px) {
    max-width: 100%;
    min-width: initial;
  }

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

.cemetery-slide {
  max-width: 150px;
}
</style>