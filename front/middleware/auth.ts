import { useAuthStore } from '~/stores/useAuthStore'
export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore()
    if (authStore.loggedIn !== true) {
        return navigateTo('/admin/login')
    }
})