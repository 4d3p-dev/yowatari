<script lang="ts">
	// import icon from "$lib/images/yomi.png"
	import x from "$lib/images/x.png"
</script>

<section class="tmp">
	<h1>厨二系ガジェオタ もくの生態</h1>
	<div class="icon">
		<!-- <img src={icon} alt="icon" style="width: 8em;"> -->
	</div>
	<div class="introduction">	
		名前: もく<br>
		年齢: 永遠の16<br>
		性別: 男の娘<br>
		意気込み: 清い鯖に((むりだろ<br>
		役割: 雑務
	</div>
	<p class="links" style="text-align: center;">
		<a href="https://x.com/nuaaaaka"><img src={x} alt="X" style="width: 4em;"></a>
	</p>
	<div class="texts">

	</div>
</section>

<style>
    :root {
		--color-page-bg-0: #fee5ff;
		--color-page-bg-1: #f8a3ff;
	    --color-page-bg-2: #ce9eca;
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