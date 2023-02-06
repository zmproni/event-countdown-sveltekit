<script>
	// @ts-nocheck
	import DateSegment from './DateSegment.svelte';
	import { current } from '$stores/time';
	import { DateTime } from 'luxon';
	import { calculateDifferenceFormatted } from '$lib/utils/time';

	export let data;

	let difference;

	const { _id, zone, dateTime, title } = data.event;
	const target = DateTime.fromISO(dateTime).setZone(zone);

	$: difference = calculateDifferenceFormatted(target, $current);
</script>

<svelte:head>
	<title
		>{title} - {difference.days}d:{difference.hours}h:{difference.minutes}m:{difference.seconds}s</title
	>
</svelte:head>

<section class="flex h-screen flex-col items-center justify-center">
	<div class="lg:flex-1" />
	<div class="lg:px-42 px-16 py-4 md:px-32 lg:pb-20">
		<h2 class="text-center font-inter text-3xl text-gray-900 lg:text-5xl lg:leading-normal">
			{title}
		</h2>
	</div>
	<div class="divide flex flex-row flex-nowrap justify-center p-4">
		{#if difference.negative}
			<span class="w-10 px-2 font-rubik text-5xl font-black text-gray-900 lg:w-44 lg:text-8xl"
				>-</span
			>
		{/if}
		<DateSegment number={difference.days} dateType={'Days'} />
		<span class="my-2 font-bold lg:text-6xl">:</span>
		<DateSegment number={difference.hours} dateType={'Hours'} />
		<span class="my-2 font-bold lg:text-6xl">:</span>
		<DateSegment number={difference.minutes} dateType={'Minutes'} />
		<span class="my-2 font-bold lg:text-6xl">:</span>
		<DateSegment number={difference.seconds} dateType={'Seconds'} />
	</div>
	<div class="px-4 pb-16 text-center text-gray-600 lg:pt-20 lg:leading-normal">
		<p class="font-inter">
			{$current.toLocaleString(DateTime.DATETIME_FULL)}<br />
			{target.toLocaleString(DateTime.DATETIME_FULL)}
		</p>
	</div>
	<div class="lg:flex-1" />
</section>
