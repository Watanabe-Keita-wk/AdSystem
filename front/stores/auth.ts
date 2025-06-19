import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
    const loggedIn = ref(false); // 認証状態

    function setLoginStatus(status: boolean) {
        loggedIn.value = status
    }

    return {
        loggedIn,
        setLoginStatus
    };
});