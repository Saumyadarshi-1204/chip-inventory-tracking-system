const db = require("../db");

/* Create transfer request */
exports.createTransfer = (req, res) => {
  const { lot_id, from_location_id, to_location_id, requested_by } = req.body;

  const sql = `
    INSERT INTO transfers (lot_id, from_location_id, to_location_id, requested_by)
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    sql,
    [lot_id, from_location_id, to_location_id, requested_by],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });

      const auditSql = `
        INSERT INTO audit_logs (lot_id, action, performed_by, remarks)
        VALUES (?, 'TRANSFER_REQUESTED', ?, 'Transfer requested')
      `;

      db.query(auditSql, [lot_id, requested_by]);

      res.json({ message: "Transfer request created" });
    }
  );
};

/* Approve transfer */
exports.approveTransfer = (req, res) => {
  const transferId = req.params.id;
  const { approved_by } = req.body;

  const getSql = `
    SELECT lot_id, to_location_id
    FROM transfers
    WHERE transfer_id = ?
  `;

  db.query(getSql, [transferId], (err, rows) => {
    if (err || rows.length === 0)
      return res.status(404).json({ error: "Transfer not found" });

    const { lot_id, to_location_id } = rows[0];

    const updateTransferSql = `
      UPDATE transfers
      SET status = 'APPROVED',
          approved_by = ?,
          transfer_date = NOW()
      WHERE transfer_id = ?
    `;

    db.query(updateTransferSql, [approved_by, transferId], (err) => {
      if (err) return res.status(500).json({ error: err.message });

      const updateInventorySql = `
        UPDATE inventory
        SET location_id = ?
        WHERE lot_id = ?
      `;

      db.query(updateInventorySql, [to_location_id, lot_id], (err) => {
        if (err) return res.status(500).json({ error: err.message });

        const auditSql = `
          INSERT INTO audit_logs (lot_id, action, performed_by, remarks)
          VALUES (?, 'TRANSFER_APPROVED', ?, 'Transfer approved')
        `;

        db.query(auditSql, [lot_id, approved_by]);

        res.json({ message: "Transfer approved" });
      });
    });
  });
};

/* Fetch audit logs by lot */
exports.getAuditLogs = (req, res) => {
  const { lot_id } = req.params;

  const sql = `
    SELECT action, performed_by, timestamp, remarks
    FROM audit_logs
    WHERE lot_id = ?
    ORDER BY timestamp ASC
  `;

  db.query(sql, [lot_id], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};
