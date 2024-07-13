"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const signup = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if(user.email && user.password && user.username){
      setDisabled(false)
    }
    console.log(user)
  }, [user]);
  return (
    <div className="min-h-screen w-screen bg-blue-400 flex items-center justify-center">
      <div className="min-h-fit w-[25vw] bg-white rounded-lg pb-10">
        <h1 className="text-center text-3xl mt-5">Signup</h1>
        <form className="px-6" action="">
          <div className="flex flex-col mt-5 outline-none">
            <label htmlFor="username">Username:</label>
            <input
              value={user.username}
              onChange={(e) => {
                setUser({
                  ...user,
                  username: e.target.value,
                });
              }}
              className="border-[1px] border-blue-500 rounded-md py-1 px-1"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col mt-5 outline-none">
            <label htmlFor="email">Email:</label>
            <input
              onChange={(e) => {
                setUser({
                  ...user,
                  email: e.target.value,
                });
              }}
              value={user.email}
              className="border-[1px] border-blue-500 rounded-md py-1 px-1"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col mt-5 outline-none">
            <label htmlFor="password">Password:</label>
            <input
              value={user.password}
              onChange={(e) => {
                setUser({
                  ...user,
                  password: e.target.value,
                });
              }}
              className="border-[1px] border-blue-500 rounded-md py-1 px-1"
              type="text"
              name=""
              id=""
            />
          </div>
          <button
            className={`mt-5 ${
              disabled ? `bg-zinc-600 cursor-not-allowed` : `bg-blue-600`
            } w-full  text-white py-2 rounded-lg`}
          >
            Sign Up
          </button>
          <p className="text-md text-center">
            Already have an account ?{" "}
            <Link className="text-blue-800 hover:underline" href={"/login"}>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default signup;
