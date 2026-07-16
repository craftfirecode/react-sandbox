import {Navigate, Outlet} from "react-router";
import {useAuth} from "../../components/provider/auth/AuthProvider.tsx";
import {LoadingSpinner} from "@/components/animation/loadingSpinner.tsx";

export default function ProtectedRoute() {
  const { session, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner/>;
  }

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
