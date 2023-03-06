import { set, connect } from 'mongoose';

set('strictQuery', true);

export const connectToDatabase = async () => {
	await connect(process.env.MONGO_URI, {
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
