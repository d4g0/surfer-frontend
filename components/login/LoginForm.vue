<template>
  <div>
    <article class="bg-white p-10 mt-16 rounded-2xl max-w-sm mx-auto">
      <h1 class="font-bold text-4xl opacity-75 text-center">Sing In</h1>

      <ul class="mt-10 flex justify-between">
        <li>
          <button
            @click="submit"
            class="bg-indigo-600 text-white font-medium text-lg py-3 px-5 rounded-xl"
          >
            Continue
          </button>
        </li>

        <li>
          <button
            @click="singOut"
            class="border opacity-70 font-medium text-lg py-3 px-5 rounded-xl"
          >
            log out
          </button>
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      formData: {
        username: "lolo",
        password: "lolodelmonte",
      },
    };
  },
  methods: {

    ...mapMutations("auth/", ["logIn", "logOut"]),

    submit() {
      const [authorization, role] = ["my_super_token", "ADMIN"];
      this.logIn({ authorization, role });
      this.$router.push(role.toLowerCase());
    },

    singOut() {
      this.logOut();
      this.$router.push('login');
    },

  },
};
</script>

<style>
</style>