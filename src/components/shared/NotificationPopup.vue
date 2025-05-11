<script setup>
import { useNotificationPopupStore } from '@/stores/ui/notification-popup';
import { watch } from 'vue';

const store = useNotificationPopupStore();
watch(() => store.visible, (newVal) => {
  document.body.style.overflow = newVal ? 'hidden' : 'auto'
})
</script>

<template>
  <div class="popup">
    <div v-if="store.visible" class="popup__overlay">
      <div :class="['popup__notification', store.type]">
        {{ store.message }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.popup {
  &__overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9998;
    pointer-events: all;
  }

  &__notification {
    background-color: white;
    padding: 1.5em 2em;
    border-radius: 10px;
    min-width: 250px;
    text-align: center;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    z-index: 9999;
    &.success {
      border-left: 5px solid #4CAF50;
    }
    .error {
      border-left: 5px solid #F44336;
    }
    &.info {
      border-left: 5px solid #2196F3;
    }
  }
}
</style>
