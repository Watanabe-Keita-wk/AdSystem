<script setup>
    definePageMeta({
        middleware: ["auth"]
    })
    const resultsData = await $fetch('/api/showResults', { method: 'GET' })
</script>
<template>
    <div>
        <h1>プロモーション成果参照画面</h1>
        <table>
            <tbody>
                <tr>
                    <th>プロモーション名</th>
                    <th>クリック数</th>
                    <th>成果発生数</th>
                </tr>
                <tr v-for="row in resultsData">
                    <td>{{ row.promotion_name }}</td>
                    <td>{{ row.click_count }}</td>
                    <td>{{ row.cv_count }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style>
    table {
        width: 70%;
        border-top: 1px solid #e0e0e0;
        border-left: 1px solid #e0e0e0;
        word-break: break-word;
        border-spacing: 0;
    }
    th {
        font-weight: normal;
        background: #f5f5f5;
        border-right: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
        box-shadow: 1px 1px 0 0 #fff inset, -1px -1px 0 0 #fff inset;
        padding: 4px 12px;
        white-space: nowrap;
        font-weight: bold;
    }
    td {
        border-right: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
        box-shadow: 1px 1px 0 0 #fff inset, -1px -1px 0 0 #fff inset;
        padding: 4px 12px;
    }
    .even {
        background-color: #fafafa;
    }
</style>