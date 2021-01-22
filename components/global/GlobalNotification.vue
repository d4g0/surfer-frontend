<template>
  <div>
    <transition name="fade">
      <div
        v-if="isNotificationActive"
        class="fixed top-0 left-0 w-full z-50 p-6 bg-light-elevatedSurface dark:bg-dark-elevatedSurface shadow-2xl"
      >
        {{ notification }}
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("globalNotification/", [
      "notification",
      "isNotificationActive",
    ]),
  },
};
</script>

<style>
</style>