<script lang="ts">
	import icon from "$lib/images/kino.webp"
	import x from "$lib/images/x.png"
</script>

<section class="tmp">
	<h1>つよつよエンジニア きの の生態</h1>
	<div class="icon">
		<img src={icon} alt="icon" style="width: 8em;">
	</div>
	<div class="introduction">	
		名前: きの<br>
		年齢: 非公開<br>
		性別: 男<br>
		意気込み: 平和にやっていきます<br>
		役割: bot管理 開発
	</div>
	<p class="links" style="text-align: center;">
		<a href="https://x.com/kino_tkr"><img src={x} alt="X" style="width: 4em;"></a>
	</p>
	<div class="texts">

	</div>
</section>

<style>
    :root {
		--color-page-bg-0: #ffd10d;
		--color-page-bg-1: #ffe880;
	    --color-page-bg-2: hsl(224, 44%, 95%);
	    --color-page-theme-1: #ff3e00;
	    --color-page-theme-2: #4075a6;
	    --color-page-text: rgba(0, 0, 0, 0.7);
    }
	section{
		display: grid;
		grid-template-areas:
			"h h h h h"
			". ic . in ."
			"l l l l l"
			"t t t t t";
		grid-template-columns: 1fr auto 10px auto 3fr;
	}
	h1{
		grid-area: h;
	}
	.icon{
		grid-area: ic;
	}
	.introduction{
		grid-area: in;
	}
	.links{
		grid-area: l;
	}
	.texts{
		grid-area: t;
	}
</style>