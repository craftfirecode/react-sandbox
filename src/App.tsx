import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {RouterProvider} from "react-router";
import {router} from "./router";
import {AuthProvider} from "@/components/provider/auth/AuthProvider.tsx";
import './App.css';
import {ThemeProvider} from "@/components/provider/theme/theme-provider.tsx";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <AuthProvider>
                    <RouterProvider router={router} />
                </AuthProvider>
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;
