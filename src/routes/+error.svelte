<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status}: {$page.error?.message}</title>
	<meta name="description" content="エラーが発生しました" />
</svelte:head>

<section>
	<h1>
		{#if $page.status === 404}
			404 - ページが見つかりません
		{:else if $page.status === 403}
			403 - アクセスが拒否されました
		{:else　if $page.error?.message === 'You are not authorised to access.'}
            403 - You are not authorised to access.
        {:else}
			{$page.status}: {$page.error?.message}
		{/if}
	</h1>
	
	<p>
		{#if $page.status === 404}
			お探しのページは存在しないか、移動した可能性があります。
		{:else if $page.status === 403}
			アクセスする権限がありません。
		{:else}
			エラーが発生しました。
		{/if}
	</p>
	
	<a href="/">トップページに戻る</a>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		padding: 2rem;
		text-align: center;
	}

	h1 {
		width: 100%;
		color: var(--color-page-theme-1);
		margin-bottom: 1rem;
	}
	
	p {
		margin-bottom: 2rem;
		color: var(--color-page-text);
	}
	
	a {
		color: var(--color-page-theme-2);
		text-decoration: none;
		border: 1px solid var(--color-page-theme-2);
		padding: 0.5rem 1rem;
		border-radius: 4px;
		transition: background-color 0.3s, color 0.3s;
	}
	
	a:hover {
		background-color: var(--color-page-theme-2);
		color: white;
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
