const db = require('../db');

/* Add lot + inventory */
exports.addLot = (req, res) => {
  const { lot_id, component_id, quantity, location_id, receipt_date } = req.body;

  const lotSql = `
    INSERT INTO lots (lot_id, component_id, receipt_date)
    VALUES (?, ?, ?)
  `;

  db.query(lotSql, [lot_id, component_id, receipt_date], (err) => {
    if (err) return res.status(500).json({ error: err.message });

    const invSql = `
      INSERT INTO inventory (lot_id, quantity_available, location_id)
      VALUES (?, ?, ?)
    `;

    db.query(invSql, [lot_id, quantity, location_id], (err2) => {
      if (err2) return res.status(500).json({ error: err2.message });

      res.json({ message: "Lot and inventory added" });
    });
  });
};

/* Get inventory */
exports.getInventory = (req, res) => {
  const sql = `
    SELECT
      l.lot_id,
      c.component_type,
      i.quantity_available,
      loc.location_name
    FROM inventory i
    JOIN lots l ON i.lot_id = l.lot_id
    JOIN components c ON l.component_id = c.component_id
    JOIN locations loc ON i.location_id = loc.location_id
  `;

  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
