const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function postAPI(
    path: string,
    options: RequestInit = {}
) {
    const token = "token";

    const response = await fetch(`${BASE_URL}${path}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
            ...(token && { Authorization: `Bearer ${token}` }),
        },
    });

    if (!response.ok) {
        throw new Error("API Fehler");
    }

    return response.json();
}