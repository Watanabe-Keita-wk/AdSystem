import { ref } from 'vue';

export const useLogin = () => {
    const userId = ref('')
    const userPass = ref('')

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
                return "true"
            }
            return "false"
        } catch (err) {
            console.error(err)
        }
    }
    return { userId, userPass, handleLogin }
}