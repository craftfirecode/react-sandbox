import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase.ts";
import type { Session } from "@supabase/supabase-js";

type AuthContextType = {
  session: Session | null;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  session: null,
  loading: true,
});

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const { data: { session: localSession } } = await supabase.auth.getSession();

        if (localSession) {
          const { data: { user }, error } = await supabase.auth.getUser();

          if (error || !user) {
            await supabase.auth.signOut();
            setSession(null);
          } else {
            setSession(localSession);
          }
        } else {
          setSession(null);
        }
      } catch (err) {
        setSession(null);
      } finally {
        setLoading(false);
      }
    }

    init();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, currentSession) => {
      setSession(currentSession);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
      <AuthContext.Provider value={{ session, loading }}>
        {children}
      </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}