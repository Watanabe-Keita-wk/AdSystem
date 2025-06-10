<script setup>
    import {navigateTo} from '#app';

    async function handleClick () {
        try {
            const promotionId = "okajd56e";
            const clickId = await $fetch(`/api/click?promotionId=${promotionId}`, { method: 'GET' });
            await navigateTo({
                path: '/media/lp',
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