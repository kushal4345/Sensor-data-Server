# 🌱 Sensor Data API

A Node.js + Express REST API to collect and manage sensor data such as temperature, humidity, soil moisture, vibration, and location. MongoDB Atlas is used for cloud-based storage.

---

## 🚀 Features

- ✅ RESTful API with Express.js
- 🌍 Cloud database with MongoDB Atlas
- 📦 Data Schema with Mongoose
- 🕒 Auto-generated timestamps
- 📡 Sensor data includes:
  - Temperature
  - Humidity
  - Soil Moisture
  - Vibration
  - Location (Latitude & Longitude)

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **ODM:** Mongoose

---

## 📁 Project Structure

Sensor-data-Server/
│
├── models/
│ └── SensorData.js # Mongoose schema
│
├── routes/
│ └── sensor.js # API route for data posting/getting
│
├── .env # Environment variables (Mongo URI, PORT)
├── server.js # Main server file
└── package.json

---

## ⚙️ Installation

1. **Clone the repo:**

```bash
git clone https://github.com/your-username/Sensor-data-Server.git
cd Sensor-data-Server
```

<h1>install Dependencies"</h1>

npm install
PORT=3000
MONGO_URI=your_mongo_atlas_connection_string
node server.js

📬 API Endpoints
Method	Endpoint	Description
POST	/api/sensor	Submit sensor data
GET	/api/sensor	Retrieve all sensor data

{
  "temperature": 24.5,
  "humidity": 65,
  "soilMoisture": 40,
  "vibration": false,
  "location": {
    "latitude": 28.7041,
    "longitude": 77.1025
  }
}

🌐 Deployment
When deploying (e.g., on Render, Railway, or Heroku), ensure you:
Use process.env.PORT || 3000 in your server.js.
Store MONGO_URI securely as an environment variable.

👨‍💻 Author
Kushal Sharma
📧 kushalsharm4345@gmail.com
🔗 LinkedIn https://www.linkedin.com/in/kushal-sharma-67378a279/




