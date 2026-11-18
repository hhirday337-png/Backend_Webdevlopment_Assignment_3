const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Add this line
const productRoutes = require('./routes/productRoutes');
require('dotenv').config();

const app = express();

app.use(cors()); // Add this line before your routes!
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ecommerce')
  .then(() => console.log('MongoDB Connected Successfully'))
  .catch(err => console.error('MongoDB Connection Error:', err));

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));