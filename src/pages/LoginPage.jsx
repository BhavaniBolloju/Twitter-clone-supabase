import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../public/twitter.svg";
import { supabase } from "../library/supebaseClient";
import * as routes from "../constants/route-paths";

function LoginPage() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [errorFound, setErrorFound] = useState(null);
  const navigate = useNavigate();

  const signupHandler = async function (e) {
    e.preventDefault();
    console.log(inputEmail, inputPassword);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: inputEmail,
      password: inputPassword,
    });

    if (error) {
      setErrorFound("Invalid login credentials");
    } else {
      navigate(routes.home);
    }
    setInputEmail("");
    setInputPassword("");
  };

  return (
    <div className="flex flex-col w-[480px] pt-12 px-16 pb-24 mx-auto mt-[100px] rounded-lg bg-white text-gray-500">
      <img src={logo} className="w-12 self-center" alt="Twitter logo" />

      <p className="mb-8 text-center text-xl font-semibold">Login to Twitter</p>
      <form
        className="w-[300px] flex flex-col gap-6 mx-auto"
        onSubmit={signupHandler}
      >
        <input
          className="border border-gray-300 h-10 px-5 py-2 rounded-md placeholder:text-sm focus:outline-2 focus: outline-blue-400 focus:placeholder:text-blue-300"
          placeholder="E-mail"
          type="email"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
        />
        <input
          className="border border-gray-300 h-10 px-5 py-2 rounded-md placeholder:text-sm focus:outline-2 focus: outline-blue-400 focus:placeholder:text-blue-300"
          type="text"
          placeholder="password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
        />
        <button className="bg-gray-800/80 mb-3 mt-2 text-gray-100 p-2 rounded-full hover:bg-gray-700">
          Login
        </button>
        <p className="text-center">
          Don't have an account?
          <Link
            className="text-blue-500 ml-1 text-sm hover:underline"
            to={routes.signup}
          >
            Sign up
          </Link>
        </p>
        {errorFound && (
          <p className="text-sm text-center border py-1  border-red-200 text-red-400">
            {errorFound}
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPage;
