<script>
	import Badge from '$lib/components/badge/Badge.svelte';
	import Button from '$lib/components/buttons/Button.svelte';
	import Card from '$lib/components/card/Card.svelte';
	import CardHeader from '$lib/components/card/CardHeader.svelte';
</script>

<!-- 
<Button type="default">Button</Button>
<Button type="ghost">Button</Button>
<Button type="outline">Button</Button>

<br />
<br />


<Badge type="default" color="primary" pill>Badge</Badge>
<Badge>Badge</Badge>
<Badge type="outline" color="danger">Badge</Badge> -->

<div class="col-4">
	<Card>
		<CardHeader slot="header">
			<h3 slot="title">Header</h3>
			<!-- <slot name="subtitle">subtitle</slot> -->
		</CardHeader>
	</Card>
</div>
