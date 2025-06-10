<script>
    export default {
        data() {
            return {
                error: null,
                name: ""
            }
        },
        methods: {
            async issuePromotion() {
                const promotionId = await $fetch(`/api/issuePromotion?name=${this.name}`, { method: 'GET' })
                await navigateTo({
                    path: '/admin/issueComplete',
                    query: {
                        promotionId: promotionId
                    }
                })
            }
        }
    }
</script>
<template>
    <div>
        <h1>プロモーション発行画面</h1>
        <form @submit.prevent="issuePromotion">
            <label
                for="name"
            >
            プロモーション名
            </label>
            <input
                id="name"
                type="text"
                v-model="name"
                name="name"
                placeholder="examplePromotion"
            />
            <button
                type="submit"
            >
                作成
            </button>
        </form>
    </div>
</template>