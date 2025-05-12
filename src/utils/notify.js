import { useNotificationPopupStore } from "@/stores/ui/notification-popup"

export const notify = (message, type = undefined) => {
  const store = useNotificationPopupStore();
  return store.show(message, type);
}
