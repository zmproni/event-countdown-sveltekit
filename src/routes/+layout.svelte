<script>
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import '../app.css';
</script>

<ThemeSwitch />
<slot />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
		transition: background-color 0.1s;
		transition-timing-function: cubic-bezier(0.4, 0, 1, 1);

	}

	:global(html.dark) {
		background-color: theme(colors.gray.900);
	}
</style>
