<script lang="ts">
	// TODO: Add transitions when switching tabs

	import { goto } from '$app/navigation';
	import type { ServerCountdownsType, ServerCountdownType } from '$lib/types';
	import {
		serverCountdownToLuxon,
		formatTimeLeft,
		calculateDifferenceFormatted
	} from '$lib/utils/time';
	import { current } from '$stores/time';
	import { DateTime } from 'luxon';

	export let data: { events: ServerCountdownsType };

	let upcomingSelected = true;
	$: filteredEvents = data.events.filter((event) => {
		const eventDate = serverCountdownToLuxon(event);
		return upcomingSelected ? eventDate > $current : eventDate < $current;
	});

	function passedClicked() {
		upcomingSelected = false;
	}

	function upcomingClicked() {
		upcomingSelected = true;
	}

	function navigateToEventPage(event: ServerCountdownType) {
		goto(`/events/${event._id}`);
	}
</script>

<section class="w-screen">
	<div class="mx-auto w-80 md:w-96">
		<div class="py-24">
			<h1 class="text-6xl font-black text-gray-800 font-inter">Events</h1>
		</div>
		<div class="flex flex-row">
			<div on:click={upcomingClicked} on:keydown={upcomingClicked} class="pr-16 cursor-pointer ">
				<span
					class="text-2xl duration-200 ease-in-out {upcomingSelected
						? 'text-gray-800'
						: 'text-slate-400 font-inter hover:text-gray-600'}">Upcoming</span
				>
			</div>
			<div on:click={passedClicked} on:keydown={passedClicked} class="pr-16 cursor-pointer">
				<span
					class="text-2xl duration-200 ease-in-out {!upcomingSelected
						? 'text-gray-800'
						: 'text-slate-400 hover:text-gray-600 font-inter'}">Passed</span
				>
			</div>
		</div>
		<div>
			{#each filteredEvents as event}
				<div
					on:click={() => navigateToEventPage(event)}
					on:keydown={() => navigateToEventPage(event)}
					class="flex flex-col p-4 my-4 duration-200 ease-in-out rounded-md cursor-pointer bg-stone-200 hover:shadow-lg"
				>
					<div class="pb-6 pr-8">
						<span class="text-lg text-gray-800 font-inter">{event.title}</span>
					</div>
					<div class="pr-8">
						<span class="text-sm text-gray-800 font-inter"
							>{serverCountdownToLuxon(event).toLocaleString(DateTime.DATETIME_FULL)}</span
						>
					</div>
					<div class="pr-8">
						<span class="text-sm font-bold text-gray-800 font-inter"
							>{formatTimeLeft(
								calculateDifferenceFormatted(serverCountdownToLuxon(event), $current)
							)}</span
						>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
