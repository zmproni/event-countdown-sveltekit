import type { DurationLeftType, ServerCountdownType } from '$lib/types';
import { DateTime } from 'luxon';

export function dateNumberToFormatted(number: number) {
	let formatted = number < 10 && number >= 0 ? '0' : '';
	formatted += number.toString();
	return formatted;
}

export function calculateDifferenceFormatted(date1: DateTime, date2: DateTime): DurationLeftType {
	const differenceMillis = date1.diff(date2);

	const shifted = differenceMillis
		.rescale()
		.shiftTo('days', 'hours', 'minutes', 'seconds', 'milliseconds')
		.toObject(); 
	
	return {
		days: Math.abs(shifted.days || 0),
		hours: Math.abs(shifted.hours || 0),
		minutes: Math.abs(shifted.minutes || 0),
		seconds: Math.abs(shifted.seconds || 0),
		negative: differenceMillis.toMillis() < 0
	};
}

export function formatTimeLeft(timeLeft: DurationLeftType) {
	let str = (timeLeft.negative)? '- ' : '';
	str += (timeLeft.days > 0)? dateNumberToFormatted(timeLeft.days) + 'd. ' : '';
	str += (timeLeft.hours > 0)? dateNumberToFormatted(timeLeft.hours) + 'hr. ': '';
	str += (timeLeft.minutes > 0)? dateNumberToFormatted(timeLeft.minutes) + 'min. ': '';
	str += (timeLeft.seconds > 0)? dateNumberToFormatted(timeLeft.seconds) + 'sec.' : '';
	return str;
}
 
export function serverCountdownToLuxon(data: ServerCountdownType) {
	return DateTime.fromISO(data.dateTime).setZone(data.zone);
}