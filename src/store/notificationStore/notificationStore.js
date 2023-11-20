import {defineStore} from "pinia";
import NotificationTypes from "@/const/NotificationTypes";

export const useNotificationStore = defineStore('notification', {
    state: () => {
        return {
            visible: false,
            type: 'success',
            title: '',
            text: '',
        }
    },

    actions: {
        showNotification(
            title = '',
            type = NotificationTypes.SUCCESS,
            visibilityTime = 6000
        ) {
            this.setTextContent(title);
            this.setType(type);
            this.setVisible(true);

            setTimeout(() => {
                this.setVisible(false);
            }, visibilityTime)
        },

        setType(value) {
            this.type = value;
        },

        setVisible(value) {
            this.visible = value;
        },

        setTextContent(title) {
            this.title = title;
        },

        closeNotification() {
            this.setVisible(false);
        },
    }
});