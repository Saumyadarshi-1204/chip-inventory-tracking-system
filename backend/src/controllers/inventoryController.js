const db = require('../db');

exports.addLot = (req, res) => {
  const { lot_id, component_id, quantity, receipt_date, location_id } = req.body;

  const lotSql = `
    INSERT INTO lots (lot_id, component_id, quantity, receipt_date, current_status)
    VALUES (?, ?, ?, ?, 'AVAILABLE')
  `;

  db.query(lotSql, [lot_id, component_id, quantity, receipt_date], err => {
    if (err) return res.status(500).json({ error: err.message });

    const inventorySql = `
      INSERT INTO inventory (lot_id, location_id, quantity_available)
      VALUES (?, ?, ?)
    `;

    db.query(inventorySql, [lot_id, location_id, quantity], err2 => {
      if (err2) return res.status(500).json({ error: err2.message });
      res.status(201).json({ message: 'Lot and inventory created' });
    });
  });
};

exports.getInventory = (req, res) => {
  const sql = `
    SELECT l.lot_id, c.component_type, i.quantity_available, loc.location_name
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
