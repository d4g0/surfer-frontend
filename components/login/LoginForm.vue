<template>
  <div class="w-full">
    <div
      class="max-w-screen-lg mx-auto rounded-kush focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-500"
    >
      <section class="max-w-md sm:max-w-xs mx-auto">
        <form class="w-full" @submit.prevent="submit">
          <header class="pt-16">
            <!-- logo -->
            <div class="relative flex justify-center items-center w-full">
              <span
                class="h-12 w-12 rounded-lg transform bg-gradient-to-tr from-amber-400 to-fuchsia-700"
              ></span>
            </div>
            <h1 class="mt-6 text-center font-medium text-4xl">Sing in</h1>
          </header>

          <div
            class="mt-8 space-y-6 px-6 py-8 rounded-xl bg-white dark:bg-dark-surfaceElevated"
          >
            <fieldset class="">
              <label
                for="user-input"
                class="block pl-4 text-base font-medium opacity-80"
                >User</label
              >
              <input
                type="text"
                id="user-input"
                class="block w-full mt-1 rounded py-2 px-4 focus:outline-none focus:ring-4 focus:ring-amber-500 focus:ring-opacity-60 bg-gray-100 dark:bg-gray-700"
                placeholder="your user name"
                required
                v-model.lazy="formData.username"
              />
            </fieldset>

            <fieldset class="">
              <label
                for="pass-input"
                class="block pl-4 text-base font-medium opacity-80"
                >Password</label
              >
              <input
                type="password"
                id="pass-input"
                class="block w-full mt-1 rounded py-2 px-4 focus:outline-none focus:ring-4 focus:ring-amber-500 focus:ring-opacity-60  bg-gray-100 dark:bg-gray-700"
                placeholder="your password"
                required
                v-model.lazy="formData.password"
              />
            </fieldset>
            <div>
              <button
                type="submit"
                class="block shadow-lg hover:shadow-2xl dark:bg-dark-primary bg-light-primary text-white p-2 rounded-og w-full focus-visible:ring-4 focus-visible:ring-amber-500 focus:outline-none transition-all transform-gpu duration-150 ease-in-out"
              >
                Continue
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>


<script>
import { mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      formData: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapMutations("auth/", ["logIn", "logOut"]),
    ...mapActions("globalNotification/", ["fireError"]),

    async submit() {
     

      try {
        const response = await this.$api.getToken(this.formData);
        const { authorization, role } = await response.json();
        this.logIn({ authorization, role });
        this.$router.push(role.toLowerCase());

      } catch (e) {
        if (e) {
          console.log("➡️ Error: at login");
          console.log(e);
          console.log(e.statusCode);

          if(e.statusCode == 403){
            this.fireError({
              error:"The user or password values are incorrect"
            })
          }else{
            this.fireError({
              error:`Something bad just happen. All we know it was a ${e.statusCode} one :(`
            })
          }
        }
      }

     
    },
  },
};
</script>

<style>
</style>