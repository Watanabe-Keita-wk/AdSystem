import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        loggedIn: false
    }),
    actions: {
        setLoginStatus(status: boolean) {
            this.loggedIn = status
        }
    }
});