<template>
  <div>
    <AuthInfo />
  </div>
</template>

<script>
import AuthInfo from "~/components/dev/AuthInfo.vue";
export default {
  components: { AuthInfo },
  mounted() {
    // console.log(this.$store.state.auth)
  },
};
</script>

<style>
</style>