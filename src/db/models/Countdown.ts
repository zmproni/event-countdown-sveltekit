import mongoose from 'mongoose';
import type { CountdownType } from '$types/types';

const CountdownSchema = new mongoose.Schema({
	message: String,
	dateTime: Date,
	zone: String
});

export const CountdownModel = mongoose.model<CountdownType>('Countdown', CountdownSchema);
// Note to self: Mongoose will insert the schema into the lowecase, pluralized version on the schema name 
// Therefore, CountdownModel will point to the 'countdowns' collection.
// Refrence: https://stackoverflow.com/questions/18883100/what-collection-does-mongoose-put-things-in