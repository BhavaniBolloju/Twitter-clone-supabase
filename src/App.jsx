import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import * as routes from "./constants/route-paths";

import { AuthContext } from "./context/auth-context";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<p>dashboard</p>}></Route>
      <Route path={routes.signup} element={<SignupPage />}></Route>
      <Route path={routes.signin} element={<LoginPage />}></Route>
      <Route path={routes.home} element={<HomePage />}></Route>
    </Routes>
  );
}

export default App;
