import {createBrowserRouter} from "react-router";
import Sandbox from "./routes/Sandbox.tsx";
import RootLayout from "./layouts/RootLayout.tsx";
import ProtectedLayout from "./layouts/ProtectedLayout.tsx";
import Protected from "./routes/Protected.tsx";
import ProtectedRoute from "@/features/auth/guards/ProtectedRoute.tsx";
import Login from "@/routes/Login.tsx";
import EcoFlow from "@/routes/EcoFlow.tsx";
import Dashboard from "@/routes/Dashboard.tsx";
import Home from "@/routes/Home.tsx";
import ErrorPage from "@/routes/ErrorPage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Home/>,
            },
            {
                path: "sandbox",
                element: <Sandbox/>,
            },

            {
                path: "login",
                element: <Login/>,
            },
        ],
    },
    {
        element: <ProtectedRoute/>,
        children: [
            {
                element: <ProtectedLayout/>,
                children: [
                    {
                        path: "protected",
                        element: <Protected/>,
                    },
                    {
                        path: "ecoflow",
                        element: <EcoFlow/>,
                    },
                    {
                        path: "dashboard",
                        element: <Dashboard />,
                    },
                ],
            },
        ],
    },
]);
