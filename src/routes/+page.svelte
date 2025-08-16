<script lang="ts">
	import welcome from '$lib/images/ywtr-logo-kawaii.png';
	import Timer from './countdown/Timer.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="ようこそ、夜渡り鯖へ。" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<img class="welcome-image" src={welcome} alt="Welcome" />
		</span>

		ようこそ、我らが 夜渡り 鯖へ<br />
	</h1>

	<!-- <Timer /> -->
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
		position: relative; /* 修正: 文字が画像の下に隠れないようにする */
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
		z-index: -1;
		object-fit: contain;
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