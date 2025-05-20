const mongoose = require('mongoose');

const SensorDataSchema = new mongoose.Schema({
  temperature: Number,          
  humidity: Number,               
  soilMoisture: Number,           
  vibration: Boolean,           
  location: {
    latitude: Number,
    longitude: Number             
  },
  timestamp: { type: Date, default: Date.now } 
}, { timestamps: true });

module.exports = mongoose.model('SensorData', SensorDataSchema);
