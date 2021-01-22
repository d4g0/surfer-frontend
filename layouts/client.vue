<template>
  <div
    class="antialiased min-h-screen text-light-onSurface dark:text-dark-onSurface bg-light-surface dark:bg-dark-surface transition-all duration-200 ease-in-out font-sans"
  >
    <AppNavigation />
    <GlobalNotification />
    <ClientNavigation />
    <div class="pt-16 px-6 md:px-12 lg:px-0 max-w-screen-lg mx-auto">
      <Nuxt />
    </div>
    <SessionWatcher />
  </div>
</template>

<script>
import ClientNavigation from "~/components/client/ClientNavigation.vue";
import SessionWatcher from "~/components/global/SessionWatcher.vue";
import GlobalError from "~/components/global/GlobalError.vue";
import GlobalNotification from "~/components/global/GlobalNotification.vue";
export default {
  components: {
    ClientNavigation,
    SessionWatcher,
    AppNavigation,
    GlobalNotification,
  },
};
</script>
