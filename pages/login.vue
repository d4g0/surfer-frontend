<template>
  <div>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "~/components/login/LoginForm.vue";
export default {
  middleware: ["auth"],
  layout: "login",
  components: { LoginForm },
};
</script>

<style>
</style>