const { Router } = require('express');
const IndexController = require('../controller/IndexController');

const router = Router();

router.get('/', IndexController.sendMainInfo);

module.exports = router;
