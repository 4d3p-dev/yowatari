<script lang="ts">
	import icon from "$lib/images/nika.png"
	import github from "$lib/images/github.svg";
	import tiktok from "$lib/images/tiktok.svg";
</script>

<section class="tmp">
	<h1>鯖主 / 一番のバカ Nikaの生態</h1>
	<div class="icon">
		<img src={icon} alt="icon" style="width: 8em;">
	</div>
	<div class="introduction">	
		名前: Nika<br>
		年齢: 07生まれ<br>
		性別: オス猿<br>
		人種: 不明<br>
		役割: ロール デザイン ← 無職
	</div>
	<p class="links" style="text-align: center;">
		<a href="https://github.com/wauwau2007"><img src={github} alt="github" style="width: 4em;"></a>
		<a href="https://www.tiktok.com/@ignite3486"><img src={tiktok} alt="tiktok" style="width: 4em;"></a>
	</p>
	<div class="texts">
		<p>
			2025/02/07- 数週間の休暇を宣言
		</p>
	</div>
</section>

<style>
    :root {
		--color-page-bg-0: #7f1184;
        --color-page-bg-1: #c65ccc;
	    --color-page-bg-2: #616161;
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