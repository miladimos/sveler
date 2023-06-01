<script lang="ts">
	export let light: boolean = false;
</script>

<div class="card-header {light ? 'card-header-light' : ''} ">
	<slot name="title" />
</div>
