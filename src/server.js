import express, { urlencoded } from 'express';
import cors from 'cors';

import indexRoutes from './routes/index.routes.js';
import productRoutes from './routes/products.routes.js';

// initialize server
const app = express();

// config
app.set('port', process.env.PORT || 4000);
app.use(cors());
app.use(urlencoded({ extended: false }));

// routes
app.use(indexRoutes);
app.use(productRoutes);

export default app;
