import { Router } from "express";
import ProductController from "../controller/ProductController.js";

const router = Router();

router.get('/api/products', ProductController.getProducts);

export default router;