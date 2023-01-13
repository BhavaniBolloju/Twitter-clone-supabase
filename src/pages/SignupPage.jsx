import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../public/twitter.svg";
import { supabase } from "../library/supebaseClient";
import * as routes from "../constants/route-paths";

// console.log(supabase);
function SignupPage() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputuserName, setInputUserName] = useState("");
  const [inputFullName, setInputFullName] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  //signup handler
  const signupHandler = async function (e) {
    e.preventDefault();
    try {
      const { data, error: returnedError } = await supabase.auth.signUp({
        email: inputEmail,
        password: inputPassword,
      });

      // console.log(inputEmail, inputPassword, inputuserName);
      // console.log(data, "data");
      // console.log(returnedError, "returnedError");
      if (returnedError) {
        throw new Error(returnedError);
      }

      const updates = {
        id: data?.user?.id,
        username: inputuserName,
        fullname: inputFullName,
      };

      // console.log("updates", updates);

      const { error: profileError } = await supabase
        .from("profiles")
        .upsert(updates);

      if (profileError) {
        throw new Error(profileError);
      }
      // update profile and redirect to home page
      navigate(routes.home);
    } catch (err) {
      setError(err.message);
    }
    setInputEmail("");
    setInputPassword("");
    setInputUserName("");
  };

  return (
    <div className="flex flex-col w-[480px] pt-12 px-16 pb-24 mx-auto mt-[100px] rounded-lg bg-white text-gray-500">
      <img src={logo} className="w-12 self-center" alt="Twitter logo" />

      <p className="mb-8 text-center text-xl font-semibold">
        Create Your Account
      </p>
      <form
        className="w-[300px] flex flex-col gap-6 mx-auto"
        onSubmit={signupHandler}
      >
        <input
          className="border border-gray-300 h-10 px-5 py-2 rounded-md placeholder:text-sm focus:outline-2 focus: outline-blue-400 focus:placeholder:text-blue-300"
          placeholder="Full name"
          type="text"
          value={inputFullName}
          onChange={(e) => setInputFullName(e.target.value)}
        />
        <input
          className="border border-gray-300 h-10 px-5 py-2 rounded-md placeholder:text-sm focus:outline-2 focus: outline-blue-400 focus:placeholder:text-blue-300"
          placeholder="user name"
          type="text"
          value={inputuserName}
          onChange={(e) => setInputUserName(e.target.value)}
        />
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
          Sign up
        </button>
        <p className="text-center">
          Have an account?
          <Link
            className="text-blue-500 ml-1 text-sm hover:underline"
            to={routes.signin}
          >
            Sign In
          </Link>
        </p>
        {error && (
          <p className="text-sm text-center border py-1  border-red-200 text-red-400">
            {error}
          </p>
        )}
      </form>
    </div>
  );
}

export default SignupPage;
