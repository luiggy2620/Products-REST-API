import { Router } from 'express';
import {
	addProduct,
	updateProduct,
	deleteProduct
} from '../requests/ProductReq.js';
import {
	getProductsAndTypes,
	getProductsToShow
} from '../responses/ProductRes.js';

const router = Router();

router.get('/api/products', getProductsToShow);

router.get('/api/products/types', getProductsAndTypes);

router.post('/api/product/add', addProduct);

router.put('/api/product/:id', updateProduct);

router.delete('/api/product/:id', deleteProduct);

export default router;
