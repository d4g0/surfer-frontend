<template>
  <div class="text-light-onSurface dark:text-dark-onSurface">
    <header
      class="border-b dark:border-gray-500 bg-light-surface dark:bg-dark-surface transition-all ease-in-out duration-200 h-16 fixed z-30 top-0 right-0 w-full flex items-center"
    >
      <!-- border border-gray-300 -->
      <nav
        id="navigation"
        class="flex-1 flex items-baseline max-w-screen-lg mx-auto px-6 xl:px-0 justify-between"
      >
        <!-- logo -->
        <div class="">
          <nuxt-link
            to="/"
            class="flex items-baseline text-sm focus:outline-none focus:ring-4 focus:ring-amber-500 rounded-kush"
          >
            <div class="relative w-8">
              <span
                class="absolute -top-6 left-0 h-8 w-full rounded-lg transform bg-gradient-to-tr from-amber-400 to-fuchsia-700"
              ></span>
            </div>
            <h1 class="ml-2 text-2xl font-bold">Surfer</h1>
          </nuxt-link>
        </div>

        <!-- links -->
        <ul class="text-sm font-medium flex space-x-4 items-center">
          <!-- home -->
          <li>
            <nuxt-link
              to="/"
              exact=""
              :class="{ 'nuxt-link-exact-active': isOnPath('index') }"
              class="py-1 px-2 rounded-md opacity-50 hover:opacity-100 hover:bg-gray-200 dark:hover:bg-dark-surfaceElevated transition-all duration-100 text-sm focus:outline-none focus:ring-4 focus:ring-amber-500"
              >Home</nuxt-link
            >
          </li>

          

          <li>
            <button
              @click="singOut"
              class="py-1 px-2 rounded-md opacity-50 hover:opacity-100 hover:bg-gray-200 dark:hover:bg-dark-surfaceElevated transition-all duration-100 text-sm focus:outline-none focus:ring-4 focus:ring-amber-500"
              >Log Out</button
            >
          </li>
          

          <li class="">
            <div class="w-8 h-8">
              <ColorModeCtrl />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
// import { focusElAsync } from "~/composables/utils";
import {  mapMutations} from 'vuex';
export default {
  
  methods: {
    isOnPath(path /* string */) {
      return this.$route.name.startsWith(path);
    },

    ...mapMutations('auth/',['logOut']),
    singOut() {
      this.logOut();
      this.$router.push('login');

    },
  },

  
};
</script>

<style>
</style>