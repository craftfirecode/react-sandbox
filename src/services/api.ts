const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const apiService = {
    async getPosts() {
        try {
            const response = await fetch(`${BASE_URL}/posts`);
            if (!response.ok) {
                throw new Error(`Fehler beim Laden der Posts: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("API Error (getPosts):", error);
            throw error;
        }
    },

    async getCrypto() {
        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=bitcoin,ethereum,solana,cardano&price_change_percentage=24h`);
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
