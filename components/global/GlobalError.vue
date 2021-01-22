<template>
  <div>
    <transition name="fade">
      <div
        v-if="isErrorActive"
        class="fixed top-0 left-0 w-full z-50 p-6 bg-red-700 dark:bg-red-800 shadow-2xl"
      >
        {{ error }}
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("globalNotifiaction/", ["error", "isErrorActive"]),
  },
};
</script>

<style>
</style>