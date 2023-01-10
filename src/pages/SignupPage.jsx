import React from "react";
import { Link } from "react-router-dom";
import logo from "../../public/twitter.svg";

function SignupPage() {
  return (
    <div className="flex flex-col w-[480px] pt-12 px-16 pb-24 mx-auto mt-[100px] rounded-lg bg-white text-gray-500">
      <img src={logo} className="w-12 self-center" alt="Twitter logo" />

      <p className="mb-8 text-center text-xl font-semibold">
        Create Your Account
      </p>
      <form className="w-[300px] flex flex-col gap-6 mx-auto">
        <input
          className="border border-gray-300 h-10 px-5 py-2 rounded-md placeholder:text-sm focus:outline-2 focus: outline-blue-400 focus:placeholder:text-blue-300"
          placeholder="Name"
          type="text"
        />
        <input
          className="border border-gray-300 h-10 px-5 py-2 rounded-md placeholder:text-sm focus:outline-2 focus: outline-blue-400 focus:placeholder:text-blue-300"
          placeholder="E-mail"
          type="email"
        />
        <input
          className="border border-gray-300 h-10 px-5 py-2 rounded-md placeholder:text-sm focus:outline-2 focus: outline-blue-400 focus:placeholder:text-blue-300"
          type="text"
          placeholder="password"
        />
        <button className="bg-gray-800/80 mb-3 mt-2 text-gray-100 p-2 rounded-full hover:bg-gray-700">
          Sign up
        </button>
        <p className="text-center">
          Have an account?
          <Link
            className="text-blue-500 ml-1 text-sm hover:underline"
            to="/LOG_IN"
          >
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignupPage;
