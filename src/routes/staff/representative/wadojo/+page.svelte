<script lang="ts">
	import icon from "$lib/images/wadojo.png"
	import x from "$lib/images/x.png"
</script>

<section class="tmp">
	<h1>処罰屋さん / チケット屋さん わどの生態</h1>
	<div class="icon">
		<img src={icon} alt="icon" style="width: 8em;">
	</div>
	<div class="introduction">	
		名前: ! WadojoJP<br>
		年齢: 不明<br>
		性別: 男<br>
		意気込み: 夜渡りを本気で運営して世界征服します<br>
		役割: 処罰 チケット対応
	</div>
	<p class="links" style="text-align: center;">
		<a href="https://x.com/Wadojo0422"><img src={x} alt="X" style="width: 4em;"></a>
	</p>
	<div class="texts">
		<p>
			2025/04/01 運営活動を一時休止しました。
		</p>
	</div>
</section>

<style>
    :root {
		--color-page-bg-0: #ff4f4f;
		--color-page-bg-1: #ffc9c9;
	    --color-page-bg-2: #ba9b9b;
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