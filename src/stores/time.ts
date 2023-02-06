import { readable } from 'svelte/store';
import { DateTime } from 'luxon';

export const current = readable(DateTime.now().setZone('UTC+8'), function start(set) {
	const interval = setInterval(() => {
		set(DateTime.now().setZone('UTC+8'));
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});
