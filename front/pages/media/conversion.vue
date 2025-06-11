<script setup>
    (async () => {
        const route = useRoute()
        const clickId = route.query.clickId
        await $fetch(`/api/conversion?promotionId=okajd56e&clickId=${clickId}`, { method: 'GET' })
    })()
</script>
<template>
    <div>
        <h1>購入ありがとうございます</h1>
    </div>
</template>