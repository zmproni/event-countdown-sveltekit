import { countdown } from '$db/countdown';

export const load = async () => {
	const data = await countdown
		.find( {}, { sort: { dateTime: -1 } })
		.toArray();

	return {
		// TODO: Find a better way to do this. 
		countdown: JSON.parse(JSON.stringify(data))
	};
};
