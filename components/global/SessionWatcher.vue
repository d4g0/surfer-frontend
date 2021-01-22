<template></template>

<script>
// import { mapState } from "vuex";
export default {
  watch: {
    ["$store.auth.isLogedIn"](newValue, oldValue) {
      console.log("*** Loged Change detected ***");

      if (!this.$store.auth.isLogedIn) {
        console.log("*** Loged Out detected ***");
        this.$router.push("login");
      }
    },
  },
};
</script>

<style>
</style>