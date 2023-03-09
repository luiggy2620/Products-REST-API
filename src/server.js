import express, { urlencoded } from 'express';
import fileUpload from 'express-fileupload';
import cors from 'cors';

import indexRoutes from './routes/index.routes.js';
import productRoutes from './routes/products.routes.js';

// initialize server
const app = express();

// config
app.set('port', process.env.PORT || 4000);
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: './uploads'
	})
);

// routes
app.use(indexRoutes);
app.use(productRoutes);

export default app;
