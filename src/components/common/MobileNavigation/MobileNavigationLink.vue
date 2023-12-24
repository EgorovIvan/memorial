<template>
  <router-link :to="link" :class="['link', {'link_active': isActive}]">
    <img class="link__icon" :src="getIcon" alt="icon" />
    <p class="link__text">
      {{ t(textKey) }}
    </p>
  </router-link>
</template>

<script setup>
import {useI18n} from "vue-i18n";
import {computed} from "vue";
import {useRoute} from "vue-router";

const props = defineProps({
  textKey: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
})

const { t } = useI18n()
const route = useRoute()

const getIcon = computed(() => require(`./../../../assets/img/${props.icon}.svg`))
const isActive = computed(() => props.link === route.path)
</script>

<style lang="scss" scoped>
  .link {
    cursor: pointer;
    text-align: center;
    padding: 10px 0 19px;

    &_active {
      border-top: 1px solid $blue;
      filter: invert(27%) sepia(99%) saturate(1357%) hue-rotate(197deg) brightness(99%) contrast(90%);
    }

    &__text {
      color: #000;
      font-family: "Lato", sans-serif;
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.07px;
    }
  }
</style>