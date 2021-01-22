<template></template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("auth/", {
      isLogedIn: (state) => state.isLogedIn,
    }),
  },
  watch: {
    isLogedIn: function (newValue, oldValue) {

      if (!newValue) {
        this.$router.push("login");
      }
    },
  },
};
</script>

<style>
</style>