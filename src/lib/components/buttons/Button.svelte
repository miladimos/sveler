<script lang="ts">
	import type { Colors } from '../types.js';
	import type { ButtonType, ButtonStatus } from './button.types.js';

	export let type: ButtonType = 'default';
	export let status: ButtonStatus = 'normal';
	export let color: Colors = 'primary';
	export let pill: boolean = false;
	export let square: boolean = false;
</script>

{#if type === 'default'}
	<button class="btn btn-{color} 
	{pill ? 'btn-pill' : ''}
	 {square ? 'btn-square' : ''}"
		on:click
	>
		<slot />
	</button>
{:else if type === 'ghost'}
	<button
		class="btn btn-ghost-{color} {pill ? 'btn-pill' : ''}
		 {square ? 'btn-square' : ''}"
		on:click
	>
		<slot />
	</button>
{:else if type === 'outline'}
	<button
		class="btn btn-outline-{color} {pill ? 'btn-pill' : ''}
		 {square ? 'btn-square' : ''}"
		on:click
	>
		<slot />
	</button>
{/if}
