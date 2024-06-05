<template>
  <section class="bg-gray-50">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="h1-font leading-tight tracking-tight">Login</h1>
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label for="email" class="block mb-2 h2-font">Email</label>
              <input
                type="userId"
                name="userId"
                v-model="userId"
                id="userId"
                class="h2-font border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                placeholder="testtest"
                required=""
              />
            </div>
            <div>
              <label for="password" class="block mb-2 h2-font">Password</label>
              <input
                :type="showPassword ? 'text' : 'password'"
                name="password"
                id="password"
                v-model="password"
                placeholder="••••••••"
                class="h2-font border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                required=""
              />
            </div>
            <button
              @click="login"
              type="submit"
              class="w-full h2-font text-white-200 bg-lime-100 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-iris-100 rounded-lg px-5 py-2.5 text-center"
            >
              Sign in
            </button>
            <div class="flex justify-center">
              <a href="#" class="h3-font text-lime-100 hover:underline"
                >Forget your password?</a
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useNuxtApp } from "#app"
import { useCookie } from '#app'
import { reloadNuxtApp } from "#app";
import { usePortfolioStore } from '@/stores/portfolioStore';

const portfolioStore = usePortfolioStore()

definePageMeta({
  middleware: ["admin-auth"] 
})

// reloadNuxtApp({
//     ttl: 1000,
// });

const nuxtApp = useNuxtApp();
const api = nuxtApp.$api;
const userToken = useCookie('user_token');
const router = useRouter()

const userId = ref()
const password = ref()
const showPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
  console.log(showPassword.value);
};

const login = async () => {
  try {
    const result = await api.user.login({
      name: userId,
      password
    });
    // 0: admin, 1: trader
    if (result.status == 'successful' && result.account_type === 1) {
      portfolioStore.updateUser(result.account_type)
      router.push('/')
    } else if (result.status == 'successful' && result.account_type === 0) {
      portfolioStore.updateUser(result.account_type)
      router.push('/admindashboard')
    } else {
      console.error('login failed')
    }
  } catch(e) {
    console.error(e)
  }
}
</script>

<style lang="scss" scoped></style>
