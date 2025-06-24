import { ref } from 'vue';
import { useAuthStore } from '../stores/useAuthStore'

export const useLogin = () => {
    const userId = ref('')
    const userPass = ref('')
    const authStore = useAuthStore()

    const handleLogin = async () => {
        try {
            const response = await $fetch('http://localhost/api/login', {
                method: 'POST',
                body: JSON.stringify({
                    userId: userId.value,
                    userPass: userPass.value
                })
            })
            if (response === true) {
                authStore.setLoginStatus(true)
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