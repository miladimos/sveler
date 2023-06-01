<script lang="ts">
	import type { Colors } from '../types.js';
	import type { ButtonType, ButtonStatus } from './button.types.js';

	export let type: ButtonType = 'default';
	export let status: ButtonStatus = 'normal';
	export let color: Colors = 'danger';
	export let href: string | null = null;
</script>

{#if href !== null}{:else}{/if}

{#if type === 'default'}
	<!-- {:else if} -->
{/if}
<!-- <a href="#" class="btn btn-primary w-100"> Primary </a> -->

<button class="btn btn-{color}" on:click >
	<slot />
</button>


