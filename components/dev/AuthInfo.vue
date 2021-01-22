<template>
  <div>
    <article class="bg-white  p-10 rounded-2xl">
      <h1 class="font-bold text-3xl opacity-75">Auth Info</h1>
      <pre class="mt-10">{{ { isLogedIn, authorization, role } }}</pre>
    </article>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("auth/", {
      isLogedIn: (state) => state.isLogedIn,
      authorization: (state) => state.authorization,
      role: (state) => state.role,
    }),
  },
};
</script>

<style>
</style>