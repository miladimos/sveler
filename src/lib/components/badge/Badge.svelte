<script lang="ts">
	import type { Colors } from '../types.js';
	import type { BadgeType } from './badges.types.js';

	export let color: Colors = 'primary';
	export let type: BadgeType = 'default';
</script>

{#if type === 'default'}
	<span class="badge bg-{color}"><slot /></span>
{:else if type === 'light'}
	<span class="badge bg-{color}-lt"><slot /></span>
{:else if type === 'outline'}
	<span class="badge badge-outline text-{color}"><slot /></span>
{/if}
