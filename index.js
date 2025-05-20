require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const sensorRoutes = require('./routes/RecieveSensorData'); // 👈 import route

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected");

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
}).catch(err => console.error(" DB connection failed", err));

app.get('/', (req, res) => {
  res.send("API is live");
});

app.use('/api/sensor', sensorRoutes);
