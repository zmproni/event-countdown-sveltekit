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
			<h1 class="font-inter text-6xl font-black text-gray-800">Events</h1>
		</div>
		<div class="flex flex-row">
			<div on:click={upcomingClicked} on:keydown={upcomingClicked} class="cursor-pointer pr-16 ">
				<span
					class="text-2xl duration-200 ease-in-out {upcomingSelected
						? 'text-gray-800'
						: 'font-inter text-slate-400 hover:text-gray-600'}">Upcoming</span
				>
			</div>
			<div on:click={passedClicked} on:keydown={passedClicked} class="cursor-pointer pr-16">
				<span
					class="text-2xl duration-200 ease-in-out {!upcomingSelected
						? 'text-gray-800'
						: 'font-inter text-slate-400 hover:text-gray-600'}">Passed</span
				>
			</div>
		</div>
		<div>
			{#each filteredEvents as event}
				<div
					on:click={() => navigateToEventPage(event)}
					on:keydown={() => navigateToEventPage(event)}
					class="my-4 flex cursor-pointer flex-col rounded-md bg-stone-200 p-4 duration-200 ease-in-out hover:shadow-lg"
				>
					<div class="pb-6 pr-8">
						<span class="font-inter text-lg text-gray-800">{event.title}</span>
					</div>
					<div class="pr-8">
						<span class="font-inter text-sm text-gray-800"
							>{serverCountdownToLuxon(event).toLocaleString(DateTime.DATETIME_FULL)}</span
						>
					</div>
					<div class="pr-8">
						<span class="font-inter text-sm font-bold text-gray-800"
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
