<template>
  <ul class="steeps-nav">
    <template
      v-for="(link, index) in links"
      :key="index"
    >
      <CreateProfileNavigationLink
        :title="link.title"
        :active="index === activeIndex"
        :desc="link.desc"
        @click="emits('clickLink', index)"
      />
    </template>
  </ul>
</template>

<script setup>
import CreateProfileNavigationLink
  from "@/components/CreateProfile/CreateProfileNavigation/CreateProfileNavigationLink.vue";

defineProps({
  links: {
    type: Array,
    required: true,
  },
  activeIndex: {
    type: Number,
    required: true,
  },
})

const emits = defineEmits([
  'clickLink',
])
</script>

<style lang="scss" scoped>

.steeps-nav__item {
  margin-top: 45px;
  cursor: pointer;
}

.steeps-nav__title {
  font: 700 20px/1.1 sans-serif;
}

.steeps-nav__desc {
  line-height: 1.1;
  margin-top: 3px;
}

.steeps-nav__item *:not(.steeps-nav__item.active *) {
  color: var(--dark-gray);
  transition: var(--normal);
}

.steeps-nav__item:hover *:not(.steeps-nav__item.active *) {
  color: var(--blue);
}

.steeps-nav__item {
  padding-left: 34px;
  position: relative;
}

.steeps-nav__icon {
  content: "";
  background-color: #b5b6b8;
  border-radius: 50%;
  height: 14px;
  width: 14px;
  top: 3px;
  left: 0;
  position: absolute;
}

.steeps-nav__item.active .steeps-nav__icon {
  background-color: $blue;
}

.steeps-nav__icon:before {
  width: calc(100% + 8px);
  height: calc(100% + 8px);
}

.steeps-nav__icon:before,
.steeps-nav__icon:after {
  content: "";
  background-color: #175ed9;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: $normal;
}

.steeps-nav__icon:after {
  width: calc(100% + 18px);
  height: calc(100% + 18px);
}

.steeps-nav__item.current .steeps-nav__icon:before,
.steeps-nav__item.current .steeps-nav__icon:after {
  opacity: 0.1;
}
</style>