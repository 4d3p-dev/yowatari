<script lang="ts">
	import welcome from '$lib/images/svelte-welcome.webp';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="緊急お知らせ" />
</svelte:head>

<section>
	<h1>
        緊急のお知らせ
	</h1>
    現在、所有権にかのdiscordアカウントが乗っ取られ、サーバー運営が正常にできない状態です。<br>
    詳細は、<a href="mailto:info@agares.org">こちら</a>もしくはy_machanのDMまでお願いします。
	メール問い合わせの場合は、本文中にユーザー名を記載してください。
    
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}


    :root {
        --color-page-bg-0: rgb(202, 216, 228);
	    --color-page-bg-1: hsl(209, 36%, 86%);
	    --color-page-bg-2: hsl(224, 44%, 95%);
	    --color-page-theme-1: #ff3e00;
	    --color-page-theme-2: #4075a6;
	    --color-page-text: rgba(0, 0, 0, 0.7);
    }
</style>