const express = require('express');
const router = express.Router();
const controller = require('../controllers/transferController');

router.post('/', controller.requestTransfer);
router.put('/:transferId/approve', controller.approveTransfer);

module.exports = router;
