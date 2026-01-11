const db = require('../db');

exports.getLotHistory = (req, res) => {
  const { lotId } = req.params;

  const sql = `
    SELECT action, timestamp, remarks
    FROM audit_logs
    WHERE lot_id = ?
    ORDER BY timestamp DESC
  `;

  db.query(sql, [lotId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
