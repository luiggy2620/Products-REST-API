import { Router } from 'express';
import IndexController from '../controller/IndexController.js';

const router = Router();

router.get('/', IndexController.sendMainInfo);

export default router;
