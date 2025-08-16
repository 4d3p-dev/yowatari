<svelte:head>
	<title>Staff</title>
	<meta name="description" content="世渡りスタッフ一覧" />
</svelte:head>

<section>
    <h1>運営一覧</h1>
    <h2>代表</h2>
	<a data-sveltekit-reload href="/staff/representative/nika">総代表 Nika</a>
    <a data-sveltekit-reload href="/staff/representative/wadojo">処罰チケット担当 わど</a>
    <a data-sveltekit-reload href="/staff/representative/kino">bot 開発担当 きの</a>
    <a data-sveltekit-reload href="/staff/representative/tawashi">ATM 資金調達担当 たわし</a>
    <a data-sveltekit-reload href="/staff/representative/raiki">外交担当 夜宮らいき</a>
    <a data-sveltekit-reload href="/staff/representative/yuzu">HP 開発担当 yuzu</a>
	<a data-sveltekit-reload href="/staff/representative/risuchin">R-18担当 りすちん</a>
	<a data-sveltekit-reload href="/staff/representative/rasuku">マイクラ担当 らすく</a>
	<h2>正規運営</h2>
	<a data-sveltekit-reload href="/staff/management/michael">マイケル</a>
	<a data-sveltekit-reload href="/staff/management/moku">もく</a>
	<a data-sveltekit-reload href="/staff/management/yomi">よみ</a>
	<a data-sveltekit-reload href="/staff/management/mikan">みかん</a>
	<!-- <a data-sveltekit-reload href="/staff/yamamoto">マクラーレン山本</a> -->
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
        font-size: 3em;
	}

    h2{
        font-size: 1.5em;
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