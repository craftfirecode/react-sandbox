import {useAuth} from "@/features/auth/guards/AuthProvider";
import LogoutButton from "@/features/auth/guards/LogoutButton";

export default function Dashboard() {
  const { session } = useAuth();

  return (
    <>
      <h1>Dashboard</h1>

      <p>{session?.user.email}</p>

      <LogoutButton />
    </>
  );
}
