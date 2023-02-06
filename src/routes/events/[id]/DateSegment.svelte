<script lang="ts">
	import { dateNumberToFormatted } from '$lib/utils/time';

	export let number: number;
	export let dateType: string;
</script>

<div class="block">
	<div class='w-20 px-2  lg:w-44'>
		<h1
		class=" lg:text-8xl text-center font-rubik text-5xl font-black text-gray-900 dark:text-gray-100"
		>
		{dateNumberToFormatted(number)}
	</h1>
</div>
	<p class="text-center text-gray-400">{dateType}</p>
</div>
