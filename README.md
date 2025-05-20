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

<h1>Install Dependencies"</h1>

npm install
PORT=3000 <br>
MONGO_URI=your_mongo_atlas_connection_string
node server.js <br>

📬 API Endpoints
Method	Endpoint	Description <br>
POST	/api/sensor	Submit sensor data <br>
GET	/api/sensor	Retrieve all sensor data <br>
<hr>
📌 Example Sensor Data JSON

{
  "temperature": 24.5, <br>
  "humidity": 65, <br>
  "soilMoisture": 40, <br>
  "vibration": false, <br>
  "location": { <br>
    "latitude": 28.7041, <br>
    "longitude": 77.1025 <br>
  }
}
<hr>

🌐 Deployment
 <br>
When deploying (e.g., on Render, Railway, or Heroku), ensure you: <br>
Use process.env.PORT || 3000 in your server.js. <br>
Store MONGO_URI securely as an environment variable.
<hr>

👨‍💻 Author
Kushal Sharma <br>
📧 kushalsharm4345@gmail.com <br>
🔗 LinkedIn https://www.linkedin.com/in/kushal-sharma-67378a279/




