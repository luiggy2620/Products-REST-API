import { Router } from 'express';
import { addTypeOfProduct } from '../requests/TypeOfProductReq.js';

const router = Router();

router.post('/api/typeProduct/add', addTypeOfProduct);

export default router;
