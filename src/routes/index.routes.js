import { Router } from 'express';
import { sendMainInfo } from '../responses/indexRes.js';

const router = Router();

router.get('/', sendMainInfo);

export default router;
