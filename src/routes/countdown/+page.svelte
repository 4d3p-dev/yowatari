<script lang="ts">
	import Timer from './Timer.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="カウントダウン" />
</svelte:head>

<section>
	<Timer />
</section>

<style>
	:root {
        --color-page-bg-0: rgb(202, 216, 228);
	    --color-page-bg-1: hsl(209, 36%, 86%);
	    --color-page-bg-2: hsl(224, 44%, 95%);
	    --color-page-theme-1: #ff3e00;
	    --color-page-theme-2: #4075a6;
	    --color-page-text: rgba(0, 0, 0, 0.7);
    }
	
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
