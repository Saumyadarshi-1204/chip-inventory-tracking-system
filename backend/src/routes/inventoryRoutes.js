const express = require('express');
const router = express.Router();
const controller = require('../controllers/inventoryController');

router.post('/lot', controller.addLot);
router.get('/', controller.getInventory);

module.exports = router;
