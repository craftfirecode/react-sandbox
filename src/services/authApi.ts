const BASE_URL = "https://dummyjson.com";

export interface AuthUser {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    accessToken: string;
    refreshToken: string;
}

export const authApi = {
    async login(username: string, password: string): Promise<AuthUser> {
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username,
                password,
                expiresInMins: 30, // optional
            }),
        });

        if (!response.ok) {
            throw new Error("Login fehlgeschlagen: Falsche Zugangsdaten");
        }

        return await response.json();
    },

    async getMe(token: string): Promise<AuthUser> {
        const response = await fetch(`${BASE_URL}/auth/me`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error("Token ungültig oder abgelaufen");
        }

        return await response.json();
    },
};
