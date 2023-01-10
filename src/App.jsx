import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<p>home page</p>}></Route>
      <Route path="/SIGN_UP" element={<SignupPage />}></Route>
      <Route path="/LOG_IN" element={<LoginPage />}></Route>
    </Routes>
  );
}

export default App;
