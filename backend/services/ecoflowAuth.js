import crypto from "crypto";

export async function getMqttCredentials() {
    const accessKey = process.env.ACCESS_KEY;
    const secretKey = process.env.SECRET_KEY;
    const host = process.env.ECOFLOW_HOST;

    const timestamp = Date.now().toString();
    const nonce = Math.floor(100000 + Math.random() * 900000).toString(); // 6-stellige Zufallszahl

    // Signatur-String nach EcoFlow-Vorgabe zusammensetzen
    const strToSign = `accessKey=${accessKey}&nonce=${nonce}&timestamp=${timestamp}`;

    // HMAC-SHA256 erstellen
    const signature = crypto
        .createHmac("sha256", secretKey)
        .update(strToSign)
        .digest("hex");

    const headers = {
        "accessKey": accessKey,
        "nonce": nonce,
        "timestamp": timestamp,
        "sign": signature,
        "Content-Type": "application/json;charset=UTF-8"
    };

    try {
        const response = await fetch(`${host}/iot-open/sign/certification`, { headers });
        const result = await response.json();

        if (result.code !== "0" || !result.data) {
            throw new Error(`EcoFlow Auth Fehler: ${result.message || "Unbekannter Fehler"}`);
        }

        // Liefert certificateAccount, certificatePassword, url, port zurück
        return result.data;
    } catch (error) {
        console.error("❌ Fehler beim Abholen der EcoFlow Zertifikate:", error.message);
        throw error;
    }
}
