import { defineStore } from 'pinia';

const isDefaultLoggedIn = () => {
    const accessToken = useCookie('accessToken', { secure: true, sameSite: true })
    return accessToken.value !== null && accessToken.value !== '' && accessToken.value !== undefined
}

export const useAuthStore = defineStore('auth', {
    state: () => ({
        loggedIn: isDefaultLoggedIn()
    }),
    actions: {
        setLoginStatus(status: boolean) {
            this.loggedIn = status
        }
    }
});