import { NotificationType } from '@/constants/NotificationType';
import { defineStore } from 'pinia'

export const useNotificationPopupStore = defineStore('notification-popup', {
  state: () => ({
    _message: '',
    _type: '',
    _visible: false,
  }),
  getters: {
    message() {
      return this._message;
    },
    type() {
      return this._type;
    },
    visible() {
      return this._visible;
    },
  },
  actions: {
    show(message, type = NotificationType.INFO, delay = 1000) {
      return new Promise((resolve) => {
        this._message = message;
        this._type = type;
        this._visible = true;

        setTimeout(() => {
          this._visible = false;
          resolve();
        }, delay);
      });
    },
  },
});
