import { Router } from 'express';
import {
	addProduct,
	updateProduct,
	deleteProduct
} from '../requests/ProductReq.js';
import { getProducts } from '../responses/productRes.js';

const router = Router();

router.get('/api/products', getProducts);

router.post('/api/product/add', addProduct);

router.put('/api/product/:id', updateProduct);

router.delete('/api/product/:id', deleteProduct);

export default router;
