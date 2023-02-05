import mongoose from "mongoose";
import { MONGO_URI } from "$env/static/private";
/*
    0 - disconnected
    1 - connected
    2 - connecting
    3 - disconnecting
    4 - uninitialized
 */

type DBStatus = { code: 0|1|2|3|99 } 
const connection: DBStatus = { code: 0 }
const database = 'events'

const connect = async () => {
	if (mongoose.connections.length > 0) {
		connection.code = mongoose.connections[0].readyState;
		if (connection.code === 1) return;
		await mongoose.disconnect();
	}
	await mongoose.connect(MONGO_URI, { dbName: database });    
	connection.code = 1;
}

const disconnect = async() => {
	connection.code = 0;
	if (mongoose.connections.length === 0) return;
	await mongoose.disconnect();
}

export default {
	connect,
	disconnect,
}