import { Router } from 'express';
import { sendMainInfo } from '../responses/IndexRes.js';

const router = Router();

router.get('/', sendMainInfo);

export default router;
