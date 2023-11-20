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
            text = '',
            type = NotificationTypes.SUCCESS,
            visibilityTime = 6000
        ) {
            this.setTextContent(title, text);
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

        setTextContent(title, text) {
            this.title = title;
            this.text = text;
        },

        closeNotification() {
            this.setVisible(false);
        },
    }
});