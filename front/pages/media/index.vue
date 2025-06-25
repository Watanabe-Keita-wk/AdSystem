<script setup>
    import {navigateTo} from '#app';

    async function handleClick () {
        try {
            const promotionId = "l1n3qh2d";
            const clickId = await $fetch(`/api/click?promotionId=${promotionId}`, { method: 'GET' });
            await navigateTo({
                path: '/client/lp',
                query: {
                    clickId: clickId
                }
            })
        } catch (error) {
            console.error('api request failed')
        }
    }
</script>
<template>
  <div>
    <h1>Media Page</h1>
    <button @click="handleClick()">広告リンク</button>
  </div>
</template>