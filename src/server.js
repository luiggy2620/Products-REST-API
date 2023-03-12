import express, { urlencoded } from 'express';
import fileUpload from 'express-fileupload';
import cors from 'cors';

import indexRoutes from './routes/index.routes.js';
import productsRoutes from './routes/products.routes.js';
import productTypesRoutes from './routes/productTypes.routes.js';
import { PORT } from './env/variables.js';

// initialize server
const app = express();

// config
app.set('port', PORT || 4000);
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
app.use(productsRoutes);
app.use(productTypesRoutes);

export default app;
