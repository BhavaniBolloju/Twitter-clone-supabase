import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";
import { BrowserRouter } from "react-router-dom";
import { SupabaseContext } from "./context/supabase-context";
import { supabase } from "./library/supebaseClient";
import { AuthContextProvider } from "./context/auth-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SupabaseContext.Provider value={{ supabase }}>
      <AuthContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthContextProvider>
    </SupabaseContext.Provider>
  </React.StrictMode>
);
