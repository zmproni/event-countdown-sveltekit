import { error } from '@sveltejs/kit';
import { Types } from 'mongoose';
import mongo from '$db/mongo';
import { CountdownModel } from '$db/models/Countdown';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	if (!Types.ObjectId.isValid(params.id)) {
		throw error(404, 'Not found');
	}

	let event;

	await mongo.connect();
	if (mongo.connection.code === 1) {
		event = await CountdownModel.findById(params.id).lean();
		await mongo.disconnect();
	}

	// TODO: Change to redirrect
	if (!event) {
		throw error(404, 'Not found');
	}

	const data = JSON.parse(JSON.stringify(event));

	console.log(data)

	return { event: data };
}) satisfies PageServerLoad;
