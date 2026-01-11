const express = require('express');
const router = express.Router();
const controller = require('../controllers/componentController');

router.post('/', controller.addComponent);
router.get('/', controller.getComponents);

module.exports = router;
