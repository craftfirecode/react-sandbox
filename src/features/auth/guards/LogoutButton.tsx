import {supabase} from "@/lib/supabase";
import {Button} from "@/components/ui/button.tsx";

export default function LogoutButton() {
  return (
    <Button variant="destructive"
      onClick={() => supabase.auth.signOut()}>
      Logout
    </Button>
  );
}
