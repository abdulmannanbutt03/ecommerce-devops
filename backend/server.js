const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  ssl: { rejectUnauthorized: false }
});

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ 
      message: 'E-Commerce API Running!',
      database: 'Connected!',
      time: result.rows[0].now
    });
  } catch (err) {
    res.json({ 
      message: 'E-Commerce API Running!',
      database: 'Not connected: ' + err.message
    });
  }
});

app.get('/api/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (err) {
    res.json([
      { id: 1, name: 'Laptop', price: 999, stock: 10 },
      { id: 2, name: 'Phone', price: 499, stock: 25 },
      { id: 3, name: 'Headphones', price: 99, stock: 50 },
    ]);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
