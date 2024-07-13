import React from "react";
import Link from "next/link";

const login = () => {
  return (
    <div className="min-h-screen w-screen bg-blue-400 flex items-center justify-center">
      <div className="min-h-fit w-[25vw] bg-white rounded-lg pb-10">
        <h1 className="text-center text-3xl mt-5">Login</h1>
        <form className="px-6" action="">
          <div className="flex flex-col mt-5 outline-none">
            <label htmlFor="email">Email:</label>
            <input
              className="border-[1px] border-blue-500 rounded-md py-1 px-1"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col mt-5 outline-none">
            <label htmlFor="password">Password:</label>
            <input
              className="border-[1px] border-blue-500 rounded-md py-1 px-1"
              type="text"
              name=""
              id=""
            />
          </div>
          <button className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500">
            Login
          </button>
          <p className="text-md text-center">
            Already have an account ?{" "}
            <Link className="text-blue-800 hover:underline" href={"/signup"}>
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default login;
