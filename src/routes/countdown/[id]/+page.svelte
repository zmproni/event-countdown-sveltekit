<script>
	// @ts-nocheck
	import DateSegment from './DateSegment.svelte';
	import { current } from '$stores/time';
	import { DateTime } from 'luxon';

	export let data;

	let difference;

	const { _id, zone, dateTime, message } = data.countdown;
	const target = DateTime.fromISO(dateTime).setZone(zone);

	$: {
		const differenceMillis = target.diff($current);
		const shifted = differenceMillis
			.rescale()
			.shiftTo('days', 'hours', 'minutes', 'seconds', 'milliseconds')
			.toObject();

		difference = {
			days: Math.abs(shifted.days),
			hours: Math.abs(shifted.hours),
			minutes: Math.abs(shifted.minutes),
			seconds: Math.abs(shifted.seconds),
			negative: differenceMillis.toMillis() < 0
		};
	}
</script>

<svelte:head>
	<title
		>{message} - {difference.days}d:{difference.hours}h:{difference.minutes}m:{difference.seconds}s</title
	>
</svelte:head>

<section class="flex flex-col items-center justify-center h-screen font-source">
	<div class="lg:flex-1" />
	<div class="px-16 py-4 md:px-32 lg:px-42 lg:pb-20">
		<h2 class="text-3xl text-center text-gray-900 lg:text-5xl lg:leading-normal">{message}</h2>
	</div>
	<div class="flex flex-row justify-center p-4 divide flex-nowrap">
		{#if difference.negative}
			<span class="w-10 px-2 text-5xl font-black text-gray-900 lg:w-44 lg:text-8xl font-rubik"
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
		<p>
			{$current.toLocaleString(DateTime.DATETIME_FULL)}<br />
			{target.toLocaleString(DateTime.DATETIME_FULL)}
		</p>
	</div>
	<div class="lg:flex-1" />
</section>
