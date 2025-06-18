<script setup>
    const route = useRoute()
    const promotionId = route.query.promotionId
</script>
<template>
    <div>
        <h1>プロモーション発行完了画面</h1>
        <h3>【メディア側作業】</h3>
        <h4>A or Bで好きな方法を選んでください。</h4>
        <h4>A. LPへの遷移にリダイレクトが挟まるが実装を簡単にしたい場合：</h4>
        <h4>
            広告リンクの遷移先に以下のURLを指定してください
        </h4>
        <div class="box">
            <code>
                http://localhost/click/promotion/{{ promotionId }}
            </code>
        </div>
        <h4>B. LPへの遷移を直リンクにしたい場合：</h4>
        <h4>
            以下のスクリプトをメディアページに埋め込み、広告リンクがクリックされたときにhandleClickが発火するようにしてください
        </h4>
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
        <h3>【広告主側作業】</h3>
        <h4>
            ・LP来訪時にクエリパラメータに「clickId」が渡されるので、成果発生ページまで引き継いでください。<br>
            ・以下のスクリプトをCVページに埋め込み、成果が発生したときにhandleCVが発火するようにしてください<br>
            「_CLICK_ID_」の部分には引き継いだclickIdが入るようにしてください
        </h4>
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