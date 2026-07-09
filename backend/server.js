import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import apiRoutes from "./routes/api.js";
import {startMqtt} from "./mqtt/mqttClient.js";

dotenv.config();

const app = express();

// CORS auf * (wie gewünscht)
app.use(cors({ origin: "*" }));
app.use(express.json());

// API Routen einbinden
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`🚀 Express läuft auf http://localhost:${PORT}`);

    // Starte MQTT-Handshake im Hintergrund
    startMqtt();
});
