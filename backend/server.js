const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'E-Commerce API Running!' });
});

// Products route
app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Laptop', price: 999, stock: 10 },
    { id: 2, name: 'Phone', price: 499, stock: 25 },
    { id: 3, name: 'Headphones', price: 99, stock: 50 },
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});