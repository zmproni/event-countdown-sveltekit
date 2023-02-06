<script lang="ts">
	import { dateNumberToFormatted } from '$lib/utils/time';

	export let number: number;
	export let dateType: string;
</script>

<div class="block">
	<h1
		class="w-20 px-2 text-center font-rubik text-5xl font-black text-gray-900 lg:w-44 lg:text-8xl"
	>
		{dateNumberToFormatted(number)}
	</h1>
	<p class="text-center text-gray-400">{dateType}</p>
</div>
