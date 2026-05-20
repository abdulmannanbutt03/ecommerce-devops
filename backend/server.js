const express = require('express');
const cors = require('cors');
const client = require('prom-client');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Prometheus metrics
const register = new client.Registry();
client.collectDefaultMetrics({ register });

const httpRequests = new client.Counter({
  name: 'http_requests_total',
  help: 'Total HTTP requests',
  labelNames: ['method', 'route', 'status'],
  registers: [register]
});

// Middleware - count requests
app.use((req, res, next) => {
  res.on('finish', () => {
    httpRequests.inc({
      method: req.method,
      route: req.path,
      status: res.statusCode
    });
  });
  next();
});

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'E-Commerce API Running!' });
});

app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'ProWatch X1', price: 299, stock: 10 },
    { id: 2, name: 'NoisePro Headphones', price: 149, stock: 25 },
    { id: 3, name: 'Galaxy Phone 15', price: 899, stock: 15 },
  ]);
});

app.post('/api/cart', (req, res) => {
  res.json({ message: 'Added to cart', item: req.body });
});

app.post('/api/orders', (req, res) => {
  res.json({ message: 'Order placed!', order: req.body });
});

// Metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});