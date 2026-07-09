import {Navigate, Outlet} from "react-router";
import {useAuth} from "./AuthProvider.tsx";

export default function ProtectedRoute() {
  const { session, loading } = useAuth();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
