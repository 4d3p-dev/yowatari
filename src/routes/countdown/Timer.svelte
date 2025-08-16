<script lang="ts">
	import { onMount } from 'svelte';

	let hour: string;
	let min: string;
	let sec: string;
	let now = new Date();
	let id: number;
	const goal = 1738317600 * 1000; // 2025-1-31 19:00:00 JST
	function showRestTime() {
		const now = new Date();

		const restMillisecond = goal - now.getTime();
		const hours = Math.floor(restMillisecond / 1000 / 60 / 60);
		const minutes = Math.floor(restMillisecond / 1000 / 60) % 60;
		const seconds = Math.floor(restMillisecond / 1000) % 60;

		hour = String(hours).padStart(2, '0');
		min = String(minutes).padStart(2, '0');
		sec = String(seconds).padStart(2, '0');
		if (restMillisecond <= 1){
			clearInterval(id);
			window.location.reload();
		}
	}
	function init(){
		if (goal - now.getTime() > 0){
			id = setInterval(showRestTime, 1000);
		}
	}
	onMount(init);
</script>

<div class="timer">
	{#if goal - now.getTime() > 0}
		<span class="num">{hour}</span><span class="unit">HOUR</span>
		<span class="num">{min}</span><span class="unit">MIN</span>
		<span class="num">{sec}</span><span class="unit">SEC</span><br>
	{:else}
		<span class="after">HELLO YOWATARI.</span>
	{/if}
</div>

<style>
	.num {
		font-family: monospace;
		font-size:	12vw;
	}
	.unit {
		font-family: monospace;
		font-size:	2vw;
	}
	.after {
		font-family: monospace;
		font-size:	6vw;
	}
</style>
