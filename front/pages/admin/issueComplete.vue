<script setup>
    const route = useRoute()
    const promotionId = route.query.promotionId
</script>
<template>
    <div>
        <h1>プロモーション発行完了画面</h1>
        <h3>STEP1:</h3>
        <h3>
            以下のスクリプトをメディアページに埋め込み、広告リンクがクリックされたときにhandleClickが発火するようにしてください<br>
            また、clickIdは成果ページまで引き継いでください
        </h3>
        <div class="box">
            <code>
                &lt;script&gt;<br>
                    &emsp;async function handleClick () {<br>
                    &emsp;&emsp;const promotionId = "{{ promotionId }}";<br>
                    &emsp;&emsp;const clickId = await $fetch(`/api/click?promotionId=${promotionId}`, { method: 'GET' });<br>
                    &emsp;}<br>
                &lt;/script&gt;
            </code>
        </div>
        <h3>STEP2:</h3>
        <h3>
            以下のスクリプトをCVページに埋め込み、成果が発生したときにhandleCVが発火するようにしてください<br>
            「_CLICK_ID_」の部分にはメディアページから引き継いできたclickIdが入るようにしてください
        </h3>
        <div class="box">
            <code>
                &lt;script&gt;<br>
                    &emsp;async function handleCV () {<br>
                        &emsp;&emsp;const promotionId = "{{ promotionId }}";<br>
                        &emsp;&emsp;await $fetch(`/api/conversion?promotionId=${promotionId}&clickId=${_CLICK_ID_}`, { method: 'GET' });<br>
                    &emsp;}<br>
                &lt;/script&gt;
            </code>
        </div>
    </div>
</template>
<style>
    .box {
        border: #4e7bcc 1px solid; /*境界線の指定*/
        padding:10px;
    }
    .box code {
        margin:0;
        padding:0;
    }
</style>