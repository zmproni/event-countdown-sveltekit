<script>
	import { page } from '$app/stores';
</script>

<div class="absolute-center text-center font-rubik text-4xl uppercase text-gray-400 lg:text-6xl">
	<h1 class="p-2 text-red-400">Error {$page.status}</h1>
	<h2>{$page.error?.message}</h2>
</div>

<style>
	.absolute-center {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
