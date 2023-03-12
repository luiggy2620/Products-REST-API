import { Router } from 'express';
import { addProductType, deleteProductType } from '../requests/ProductTypeReq.js';
import { getProductTypes } from '../responses/ProductTypeRes.js';

const router = Router();

router.get('/api/productTypes', getProductTypes);

router.post('/api/productType/add', addProductType);

router.delete('/api/productType/:id', deleteProductType);

export default router;
