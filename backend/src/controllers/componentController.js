const db = require('../db');

exports.addComponent = (req, res) => {
  console.log('REQUEST BODY:', req.body); // <-- DEBUG LINE

  const { component_type, supplier, description } = req.body;

  const sql = `
    INSERT INTO components (component_type, supplier, description)
    VALUES (?, ?, ?)
  `;

  db.query(sql, [component_type, supplier, description], (err, result) => {
    if (err) {
      console.error('DB ERROR:', err);
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({
      message: 'Component added',
      component_id: result.insertId
    });
  });
};

exports.getComponents = (req, res) => {
  db.query('SELECT * FROM components', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
