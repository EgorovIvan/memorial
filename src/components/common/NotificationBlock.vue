<template>
  <teleport to="body">
    <transition name="fade">
      <div
          v-if="notificationStore.visible"
          :class="['notification', getClasses]"
      >
        <img class="notification__icon" :src="getIconPath" alt="icon" />
        <p class="notification__title">
          {{ notificationStore.title }}
        </p>
        <img
            @click="notificationStore.closeNotification"
            class="notification__close"
            src="../../assets/img/close.svg"
            alt="close"
        />
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import {useNotificationStore} from "@/store/notificationStore/notificationStore";
import {computed} from "vue";
import NotificationTypes from "@/const/NotificationTypes";

const notificationStore = useNotificationStore();

const getClasses = computed(() => {
  return {
    'notification_success': notificationStore.type === NotificationTypes.SUCCESS,
    'notification_warning': notificationStore.type === NotificationTypes.WARNING,
    'notification_error': notificationStore.type === NotificationTypes.ERROR,
  }
})

const getIconPath = computed(() => {
  const iconsList = {
    [NotificationTypes.SUCCESS]: 'success.svg',
    [NotificationTypes.WARNING]: 'warning.svg',
    [NotificationTypes.ERROR]: 'error.svg',
  }
  return require('/src/assets/img/' + iconsList[notificationStore.type])
})
</script>

<style scoped>
.notification{
  position: fixed;
  top: 30px;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  padding: 20px 40px 20px 20px;
  border-radius: 6px;
  gap: 10px;
  min-width: 300px;
  z-index: 10000;
  max-width: 450px;
}

.notification__title{
  color: #fff;
}

.notification__text{
  color: #fff;
  grid-column: 2/3;
}

.notification_success{
  background: #26AD50;
}

.notification_warning{
  background: rgb(251,140,0);
}

.notification_error{
  background: #d90303;
}

.notification__icon{
  max-width: 30px;
  grid-row: 1/3;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out, all .3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -30px);

}

.notification__close{
  max-width: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  filter: invert(1);
  cursor: pointer;
}
</style>