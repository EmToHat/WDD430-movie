const express = require('express');
const mongoose = require('mongoose');
const app = express();

const cors = require('cors');
app.use(cors());

require('dotenv').config();

const indexRoutes = require('./server/routes/index');

const port = process.env.PORT || 3000;

app.use(express.json()); // parsing application/json
app.use('/', indexRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});