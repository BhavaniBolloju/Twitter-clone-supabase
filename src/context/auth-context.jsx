import { createContext, useContext, useState, useEffect } from "react";
import { SupabaseContext } from "./supabase-context";

export const AuthContext = createContext({
  token: null,
  user: null,
});

export const AuthContextProvider = function (props) {
  const authToken = localStorage.getItem("authUser");

  const { supabase } = useContext(SupabaseContext);
  const [user, setUser] = useState(JSON.parse(authToken));

  useEffect(() => {
    const listener = supabase.auth.onAuthStateChange((event, session) => {
      if (event == "SIGNED_IN") {
        localStorage.setItem("authUser", JSON.stringify(session));
        setUser(session);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });
  }, []);

  const authValues = {
    user,
  };

  return (
    <AuthContext.Provider value={authValues}>
      {props.children}
    </AuthContext.Provider>
  );
};
