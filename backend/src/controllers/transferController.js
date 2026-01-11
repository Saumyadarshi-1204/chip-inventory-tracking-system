const db = require('../db');

/* Request a transfer */
exports.requestTransfer = (req, res) => {
  const { lot_id, from_location_id, to_location_id, requested_by } = req.body;

  const sql = `
    INSERT INTO transfers 
    (lot_id, from_location_id, to_location_id, requested_by, status)
    VALUES (?, ?, ?, ?, 'PENDING')
  `;

  db.query(sql, [lot_id, from_location_id, to_location_id, requested_by], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    const auditSql = `
      INSERT INTO audit_logs (lot_id, action, performed_by, remarks)
      VALUES (?, 'TRANSFER_REQUESTED', ?, 'Transfer request created')
    `;
    db.query(auditSql, [lot_id, requested_by]);

    res.status(201).json({
      message: 'Transfer request submitted',
      transfer_id: result.insertId
    });
  });
};

/* Approve a transfer */
exports.approveTransfer = (req, res) => {
  const { transferId } = req.params;
  const { approved_by } = req.body;

  const fetchSql = `
    SELECT * FROM transfers WHERE transfer_id = ? AND status = 'PENDING'
  `;

  db.query(fetchSql, [transferId], (err, results) => {
    if (err || results.length === 0) {
      return res.status(404).json({ error: 'Transfer not found or already processed' });
    }

    const transfer = results[0];

    const updateTransferSql = `
      UPDATE transfers
      SET status = 'APPROVED', approved_by = ?, transfer_date = NOW()
      WHERE transfer_id = ?
    `;

    db.query(updateTransferSql, [approved_by, transferId], err2 => {
      if (err2) return res.status(500).json({ error: err2.message });

      /* Update inventory */
      const deductSql = `
        UPDATE inventory
        SET quantity_available = quantity_available
        WHERE lot_id = ? AND location_id = ?
      `;

      const moveSql = `
        UPDATE inventory
        SET location_id = ?
        WHERE lot_id = ?
      `;

      db.query(deductSql, [transfer.lot_id, transfer.from_location_id]);
      db.query(moveSql, [transfer.to_location_id, transfer.lot_id]);

      const auditSql = `
        INSERT INTO audit_logs (lot_id, action, performed_by, remarks)
        VALUES (?, 'TRANSFER_APPROVED', ?, 'Transfer approved and executed')
      `;
      db.query(auditSql, [transfer.lot_id, approved_by]);

      res.json({ message: 'Transfer approved successfully' });
    });
  });
};
