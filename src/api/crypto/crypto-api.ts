export async function cryptoAPI() {
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
}

// const BASE_URL = "https://dummyjson.com";
//
// async function apiRequest(
//     path: string,
//     options: RequestInit = {}
// ) {
//     const token = getToken();
//
//     const response = await fetch(`${BASE_URL}${path}`, {
//         ...options,
//         headers: {
//             "Content-Type": "application/json",
//             ...options.headers,
//             ...(token && { Authorization: `Bearer ${token}` }),
//         },
//     });
//
//     if (!response.ok) {
//         throw new Error("API Fehler");
//     }
//
//     return response.json();
// }