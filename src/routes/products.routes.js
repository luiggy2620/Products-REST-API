import { Router } from 'express';
import ProductController from '../controller/ProductController.js';

const router = Router();

router.get('/api/products', ProductController.getProducts);

router.post('/api/product/add', ProductController.addProduct);

router.put('/api/product/:id', ProductController.updateProduct);

router.delete('/api/product/:id', ProductController.deleteProduct);

export default router;
