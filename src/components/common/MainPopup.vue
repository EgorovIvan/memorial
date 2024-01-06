<template>
  <transition name="fade">
    <div
        v-if="props.visible"
        class="popup"
        @click.self="emits('close')"
    >
      <div class="popup-content">
        <img
          class="popup__close"
          alt="close"
          @click="emits('close')"
        >
        <slot />
      </div>
    </div>
  </transition>
</template>

<script setup>
import {watch} from 'vue';

const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
});

const emits = defineEmits([
  'close',
]);

watch(() => props.visible, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});
</script>

<style scoped>
.popup{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  backdrop-filter: blur(6px);
}

.popup-content{
  padding: 40px;
  background: #fff;
  border-radius: 6px;
  position: relative;
}

.fade-enter-active,
.fade-leave-active {
  transition: .2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.popup__close{
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}
</style>
