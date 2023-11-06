<template>
  <transition name="fade">
    <div
        v-if="visible"
        :class="getClasses"
    >
      <div class="aside-form">
        <button type="button" class="close-registration" @click="emits('close')"></button>
        <slot name="content"></slot>
      </div>
    </div>
  </transition>
</template>

<script setup>
  import {computed} from "vue";

  const props = defineProps({
    visible: {
      type: Boolean,
      required: true,
    },
    position: {
      type: String,
      default: 'right',
    },
  })

  const emits = defineEmits([
      'close',
  ])

  const getClasses = computed(() => {
    return ['preview-modal', {
      'aside-top': props.position === 'top',
      'aside-right': props.position === 'right',
    }]
  })
</script>

<style scoped lang="scss">
.preview-modal {
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 81%, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 100;
}

.preview-modal.open {
  opacity: 1;
  visibility: visible;
  z-index: 150;
  display: flex;
}

.preview-modal.aside-top {
  justify-content: center;
  align-items: flex-start;
}

.preview-modal.aside-right {
  justify-content: flex-end;
  align-items: flex-start;
}

.preview-modal.aside-top .form-registration,
.preview-modal.aside-right .form-recover,
.preview-modal.aside-menu .form-registration,
.preview-modal.aside-menu .form-recover {
  display: none;
}

.preview-modal.aside-top .aside-form {
  width: 100%;
  padding: 64px $content-size 80px;
  height: auto;
  justify-content: flex-start;
}

.aside-form {
  width: 536px;
  background-color: #fff;
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  transition: $normal;
  padding-top: 64px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 100;
}

.aside-form.hide {
  display: none;
}


.close-registration {
  position: absolute;
  top: 9px;
  right: 9px;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  border: 1px solid $light-gray;
  transition: $normal;
}

.close-registration:before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.close-registration:after,
.close-registration:before {
  content: "";
  border-radius: 1px;
  height: 2px;
  left: 50%;
  position: absolute;
  top: 50%;
  width: 16px;
  background-color: $black;
}

.close-registration:after {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.close-registration:hover {
  opacity: 0.65;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>