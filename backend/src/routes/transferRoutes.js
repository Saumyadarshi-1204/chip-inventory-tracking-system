const express = require("express");
const router = express.Router();
const controller = require("../controllers/transferController");

router.post("/", controller.createTransfer);
router.put("/:id/approve", controller.approveTransfer);
router.get("/audit/:lot_id", controller.getAuditLogs);

module.exports = router;
