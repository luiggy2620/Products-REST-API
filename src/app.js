import dotenv from 'dotenv';
dotenv.config();
import { connectToDatabase } from './database.js';

connectToDatabase();
import app from './server.js';

app.listen(app.get('port'), () => {
	console.log(`server on port ${app.get('port')}`);
});
