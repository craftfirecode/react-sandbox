import mqtt from "mqtt";
import {getMqttCredentials} from "../services/ecoflowAuth.js";
import {updateData} from "../store/dataStore.js"; // <-- Wichtig: Hier importieren!

export async function startMqtt() {
    try {
        console.log("🔄 Hole MQTT-Zugangsdaten von EcoFlow...");
        const creds = await getMqttCredentials();

        console.log("📡 Verbinde mit EcoFlow MQTT Broker...");
        const client = mqtt.connect({
            host: creds.url,
            port: parseInt(creds.port),
            protocol: "mqtts",
            username: creds.certificateAccount,
            password: creds.certificatePassword,
            rejectUnauthorized: false
        });

        const topic = `/open/${creds.certificateAccount}/${process.env.DEVICE_SN}/quota`;

        client.on("connect", () => {
            console.log("✅ MQTT erfolgreich verbunden!");
            client.subscribe(topic, (err) => {
                if (!err) {
                    console.log(`📡 Topic abonniert: ${topic}`);
                } else {
                    console.error("❌ Fehler beim Abonnieren:", err);
                }
            });
        });

        client.on('message', (incomingTopic, message) => {
            try {
                const parsedPayload = JSON.parse(message.toString());

                // Daten an den datastore übergeben (dort werden sie sicher zusammengeführt)
                updateData(parsedPayload);

                // console.log("📊 Neue Daten gemerged und im Speicher abgelegt.");
            } catch (error) {
                console.error("❌ Fehler beim Parsen der MQTT-Daten:", error);
            }
        });

        client.on("error", (err) => {
            console.error("❌ MQTT Client Fehler:", err);
        });

    } catch (error) {
        console.error("🚨 MQTT konnte nicht initialisiert werden:", error.message);
    }
}
