import { set, connect } from 'mongoose';
import { MONGO_URI } from './env/variables.js';

set('strictQuery', true);

export const connectToDatabase = async () => {
	await connect(MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
		.then((db) => {
			console.log('Database is connected');
		})
		.catch((err) => {
			console.log(err);
		});
};
