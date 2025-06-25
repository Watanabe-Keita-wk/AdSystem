<script setup>
    (async () => {
        const route = useRoute()
        const promotionId = "l1n3qh2d"
        const clickId = route.query.clickId
        await $fetch(`/api/conversion?promotionId=${promotionId}&clickId=${clickId}`, { method: 'GET' })
    })()
</script>
<template>
    <div>
        <h1>購入ありがとうございます</h1>
    </div>
</template>