<script lang="ts">
	import icon from "$lib/images/risuchin.webp"
</script>

<section class="tmp">
	<h1>夜渡りのR-18といえばこの男 りすちんの生態</h1>
	<div class="icon">
		<img src={icon} alt="icon" style="width: 8em;">
	</div>
	<div class="introduction">	
		名前: りすちん<br>
		年齢: 05生まれ<br>
		性別: 男<br>
		意気込み: 夜渡りを世界最高峰のエロ鯖にしてみせます<br>
		役割: R-18カテゴリ統括
	</div>
	<p class="links" style="text-align: center;">
		
	</p>
	<div class="texts">
		<p>
			2025/02/07 運営を自主的に辞退しました。
		</p>
		<p>
			2025/02/23 運営に復帰しました。
		</p>
	</div>
</section>

<style>
    :root {
		--color-page-bg-0: #111111;
		--color-page-bg-1: #333333;
	    --color-page-bg-2: #222222;
	    --color-page-theme-1: #ff3e00;
	    --color-page-theme-2: #4075a6;
	    --color-page-text: rgba(220, 230, 167, 0.7);
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