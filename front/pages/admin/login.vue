<script setup>
    import {useLogin} from '../../composables/useLogin'
    const { userId, userPass, handleLogin } = useLogin()
    userId.value = 'admin'
    userPass.value = 'pass'
    const result = await handleLogin()
</script>
<template>
    <h1>TESTログイン</h1>
    {{ result }}
</template>