<script>
    import {useLogin} from '../../composables/useLogin'
    export default {
        data() {
            return {
                formUserId: '',
                formUserPass: ''
            }
        },
        methods: {
            async loginAction () {
                const { userId, userPass, handleLogin } = useLogin()
                userId.value = this.formUserId
                userPass.value = this.formUserPass
                const result = await handleLogin()
                if (result === true) {
                    await navigateTo({
                        path: '/admin/'
                    })
                } else {
                    alert('ID・パスワードが異なります。')
                }
            }
        }
    }
</script>
<template>
    <h1>ログイン</h1>
    <form class="login" @submit.prevent="loginAction">
        <div class="form-item">
            <label for="email">ユーザーID：</label>
            <input
                id="name"
                type="text"
                v-model="formUserId"
            >
        </div>
        <div class="form-item">
            <label for="password">パスワード：</label>
            <input
                id="password"
                type="password"
                v-model="formUserPass"
            >
        </div>
        <div class="form-item">
            <button type="submit" >ログイン</button>
        </div>
    </form>
</template>