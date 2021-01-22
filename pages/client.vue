<template>
  <div>
    <h1 class="font-black text-5xl opacity-70">Client Page</h1>
  </div>
</template>

<script>
export default {
  middleware: ["auth"],
  layout: "client",
};
</script>

<style>
</style>