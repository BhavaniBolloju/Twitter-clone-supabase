import React, { useContext, useEffect } from "react";
import Sidebar from "../components/Sidebar";

import Home from "../components/Home";
import SuggestedProfiles from "../components/SuggestedProfiles";
import { AuthContext } from "../context/auth-context";

function HomePage() {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex py-5 max-w-screen-xl mx-auto">
      <Sidebar />
      <Home />
      <SuggestedProfiles />
    </div>
  );
}

export default HomePage;
