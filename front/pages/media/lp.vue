<script setup>
    const route = useRoute()
    const clickId = route.query.clickId
</script>
<template>
    <div>
        <h1>Landing Page</h1>
        <NuxtLink :to="{ path: 'conversion', query: { clickId: clickId} }">商品購入</NuxtLink>
    </div>
</template>