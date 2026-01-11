const express = require('express');
const cors = require('cors');
require('dotenv').config();

const componentRoutes = require('./routes/componentRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const lotRoutes = require('./routes/lotRoutes');

const app = express();

/* ---------- Middleware ---------- */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ---------- Routes ---------- */
app.use('/api/components', componentRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/lots', lotRoutes);

/* ---------- Health Check ---------- */
app.get('/', (req, res) => {
  res.send('Chip Inventory Backend Running');
});

/* ---------- Server ---------- */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
