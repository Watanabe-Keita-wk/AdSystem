<script setup>
    (async () => {
        const route = useRoute()
        const clickId = route.query.clickId
        await $fetch(`/api/conversion?clickId=${clickId}`, { method: 'GET' })
    })()
</script>
<template>
    <div>
        <h1>購入ありがとうございます</h1>
        <p>{{ clickId }}</p>
    </div>
</template>