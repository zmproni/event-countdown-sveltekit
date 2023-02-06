import mongoose from 'mongoose';
const CountdownSchema = new mongoose.Schema({
	title: String,
	dateTime: Date,
	zone: String
});

export const CountdownModel = mongoose.model('Countdown', CountdownSchema);
// Note to self: Mongoose will insert the schema into the lowecase, pluralized version on the schema name
// Therefore, CountdownModel will point to the 'countdowns' collection.
// Refrence: https://stackoverflow.com/questions/18883100/what-collection-does-mongoose-put-things-in
