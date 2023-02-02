import { startMongo } from "$db/mongo.js";

startMongo().then(() => {
    console.log('Mongo started')
}).catch((/** @type {Error} */ e) => {console.log(e)});