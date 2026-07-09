import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {RouterProvider} from "react-router";
import {router} from "./router";
import {AuthProvider} from "@/features/auth/guards/AuthProvider.tsx";
import './App.css';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
        </QueryClientProvider>
    );
}

export default App;
