import { error } from '@sveltejs/kit';
import { Types } from 'mongoose';
import mongo from '$db/mongo';
import { CountdownModel } from '$db/models/Countdown';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
  if (!Types.ObjectId.isValid(params.id)) {
    throw error(404, 'Not found'); 
  } 

  await mongo.connect()
  const countdown = await CountdownModel.findById(params.id).lean()
  await mongo.disconnect()

  if(!countdown) {
    throw error(404, 'Not found');
  }

  const data = JSON.parse(JSON.stringify(countdown))

  return { countdown: data };

}) satisfies PageServerLoad;