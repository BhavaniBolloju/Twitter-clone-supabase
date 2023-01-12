import { createContext, useContext, useState, useEffect } from "react";
import { SupabaseContext } from "./supabase-context";

export const AuthContext = createContext({
  token: null,
  user: null,
});

export const AuthContextProvider = function (props) {
  const { supabase } = useContext(SupabaseContext);

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const userData = async function () {
      const { data } = await supabase.auth.getSession();
      setUser(data.session.user);
      setToken(data.session.access_token);
    };
    userData();
  }, []);

  const authValues = {
    user,
    token,
  };

  return (
    <AuthContext.Provider value={authValues}>
      {props.children}
    </AuthContext.Provider>
  );
};
