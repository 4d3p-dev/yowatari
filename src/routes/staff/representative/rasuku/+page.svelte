<script lang="ts">
	import icon from "$lib/images/rasuku.png"
</script>

<section class="tmp">
	<h1>なんで私が代表に? らすくの生態</h1>
	<div class="icon">
		<img src={icon} alt="icon" style="width: 8em;">
	</div>
	<div class="introduction">	
		名前: らすく<br>
		年齢: 非公開<br>
		性別: 男<br>
		意気込み: 代表の方達を全力でサポートします (代表になりました)<br>
		役割: マイクラ鯖運営
	</div>
	<p class="links" style="text-align: center;">
		
	</p>
	<div class="texts">
		<p>
			2025/02/23 代表就任
		</p>
	</div>
</section>

<style>
    :root {
		--color-page-bg-0: #d2f5ff;
		--color-page-bg-1: #8fcbcf;
	    --color-page-bg-2: #e4f9ff;
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