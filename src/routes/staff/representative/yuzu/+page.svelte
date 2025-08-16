<script lang="ts">
	import icon from "$lib/images/yuzu.jpg"
	import github from "$lib/images/github.svg";
	import mail from "$lib/images/mail.svg";
	import pgp from "$lib/images/pgp.svg"
</script>

<section class="tmp">
	<h1>生粋の常識枠胃痛系労働者 yuzuの生態</h1>
	<div class="icon">
		<img src={icon} alt="icon" style="width: 8em;">
	</div>
	<div class="introduction">	
		名前: yuzu<br>
		年齢: 不詳<br>
		性別: 不詳<br>
		意気込み: 寝かせてください。<br>
		役割: HP制作 開発
	</div>
	<p class="links" style="text-align: center;">
		<a href="https://github.com/yuzu-machan"><img src={github} alt="github" style="width: 4em;"></a>
		<a href="mailto:yuzu@agares.org"><img src={mail} alt="mail" style="width: 4em;"></a>
		<a href="https://keys.openpgp.org/vks/v1/by-fingerprint/B076BC3375C9BF4929096825398B4EEB940FE819"><img src={pgp} alt="PGP key" style="width: 4em;"></a>
	</p>
	<div class="texts">
		<p>2025/04/02- やすませてください。<span style="display: block; text-align: right;">2025/04/02 23:35</span></p>
	</div>
</section>

<style>
    :root {
        --color-page-bg-0: rgb(192,255,238);
	    --color-page-bg-1: rgb(207, 241, 232);
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
		grid-template-columns: 1fr auto 50px auto 3fr;
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