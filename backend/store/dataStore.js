// Hier lagern die Live-Daten im RAM deines Servers
let cachedData = {};

/**
 * Nimmt neue MQTT-Daten entgegen und verschmilzt sie mit dem bestehenden Zustand.
 */
export const updateData = (newData) => {
    if (!newData) return;

    // EcoFlow sendet Daten manchmal direkt oder verpackt im "params"-Objekt.
    // Wir extrahieren das flache Datenobjekt, um Verschachtelungen im Speicher zu vermeiden.
    const cleanData = newData.params ? newData.params : newData;

    // Deep Merge (Zusammenführung):
    // Vorhandene Felder behalten, neue Felder überschreiben/ergänzen.
    cachedData = {
        ...cachedData,
        ...cleanData
    };
};

/**
 * Gibt den aktuellsten, vollständig zusammengeführten Datenstand zurück.
 */
export const getData = () => {
    return cachedData;
};

/**
 * Alias-Export für deine API-Routen (löst den Import-Fehler in api.js).
 */
export const getQuota = () => {
    return getData();
};
