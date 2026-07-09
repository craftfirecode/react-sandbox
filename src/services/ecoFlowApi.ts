const BASE_URL = 'http://localhost:3001/api';

export const ecoFlowApiService = {
    async getEcoFlowData () {
        try {
            const response = await fetch(`${BASE_URL}/quota`);
            if (!response.ok) {
                throw new Error(`Fehler beim Laden der Posts: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("API Error (getPosts):", error);
            throw error;
        }
    },
};
