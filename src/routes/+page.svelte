<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		//TODO: Add accounts
		//TODO: Remove temporary redirect
		goto('/events');
	});
</script>
