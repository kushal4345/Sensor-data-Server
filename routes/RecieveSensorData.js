const express = require('express');
const router = express.Router();
const SensorData = require('../models/sensorData');

router.post('/', async (req, res) => {
  try {
    const data = new SensorData(req.body);
    await data.save();
    res.status(201).send("Sensor data saved");
  } catch (err) {
    console.error(err);
    res.status(400).send("Error saving data");
  }
});

router.get('/', async (req, res) => {
  try {
    const data = await SensorData.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching data");
  }
});

module.exports = router;
