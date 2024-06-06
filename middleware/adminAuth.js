import { useNuxtApp } from '#app';
import { usePortfolioStore } from '@/stores/portfolioStore';
export default defineNuxtRouteMiddleware(async (to, from) => {
  const nuxtApp = useNuxtApp();
  const portfolioStore = usePortfolioStore()
    try {
      const result = await nuxtApp.$api.user.getCurrentUser(
        {
          headers: useRequestHeaders(["cookie"])
        }
      );
      // User is authenticated, 0: admin, 1: trader
      if (result.status === 'Login') {
        if (to.name === 'login' && portfolioStore.user_type === 1) {
          return navigateTo('/');
        } else if (to.name === 'login' && portfolioStore.user_type === 0) {
          return navigateTo('/admindashboard')
        }
      } else {
        // User is not authenticated
        // If the user is trying to access a admin/trader page, redirect them to the login page
        if (to.name !== 'login')
          return navigateTo('/login');
      }

    } catch (error) {
      // Redirect to login on error
      console.log(error)
    }
  // }
  // , 0.1)
});
