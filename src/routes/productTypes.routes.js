import { Router } from 'express';
import {
	addProductType,
	updateProductType,
	deleteProductType
} from '../requests/ProductTypeReq.js';
import { getProductTypes } from '../responses/ProductTypeRes.js';

const router = Router();

router.get('/api/productTypes', getProductTypes);

router.post('/api/productType/add', addProductType);

router.put('/api/productType/:id', updateProductType);

router.delete('/api/productType/:id', deleteProductType);

export default router;
