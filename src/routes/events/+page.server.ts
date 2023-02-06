import mongo from '$db/mongo';
import { CountdownModel } from '$db/models/Countdown';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	await mongo.connect();

	if (mongo.connection.code !== 1) return;
	const events = await CountdownModel.find({}).exec();
	await mongo.disconnect();

	if (events.length <= 0) return;

	const data = JSON.parse(JSON.stringify(events));

	return { events: data };
}) satisfies PageServerLoad;
