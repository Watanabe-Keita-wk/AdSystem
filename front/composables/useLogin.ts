import { ref } from 'vue';
import { useAuthStore } from '../stores/useAuthStore'

export const useLogin = () => {
    const userId = ref('')
    const userPass = ref('')
    const authStore = useAuthStore()
    const accessToken = useCookie('accessToken', { secure: true, sameSite: true });

    const handleLogin = async () => {
        try {
            const response = await $fetch('http://localhost/api/login', {
                method: 'POST',
                body: JSON.stringify({
                    userId: userId.value,
                    userPass: userPass.value
                })
            })
            if (typeof response === 'string' && response !== '') {
                authStore.setLoginStatus(true)
                accessToken.value = response
                return true
            }
            return false
        } catch (err) {
            console.error(err)
            return false
        }
    }
    return { userId, userPass, handleLogin }
}