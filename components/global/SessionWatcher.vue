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
    isLogedIn: function (newLogedInValue, oldLogedInValue) {
      if (!newLogedInValue) {
        this.$router.push("login");
      }
    },
  },
};
</script>

<style>
</style>