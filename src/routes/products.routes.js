const { Router } = require("express");
const ProductController = require("../controller/ProductController");

const router = Router();

router.get('/api/products', ProductController.sendProducts);

module.exports = router;