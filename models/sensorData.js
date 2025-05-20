const mongoose = require('mongoose');

const sensorDataSchema = new mongoose.Schema({
  gps: {
    lat: Number,
    lng: Number
  },
  temperature: Number,
  humidity: Number,
  soilMoisture: Number,
  vibration: Boolean
}, { timestamps: true })

module.exports = mongoose.model('SensorData', sensorDataSchema);