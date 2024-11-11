"use client";

import Link from "next/link";
import React from "react";

const Login = () => {
  const changeHandler = () => {};
  return (
    <form className=" flex flex-col items-center justify-center gap-7 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2">
      <input
        className="w-1/2 rounded-md outline-none p-2 bg-slate-400 text-black text-center placeholder:text-black"
        name="name"
        placeholder="enter name"
        onChange={changeHandler}
      />
      <input
        className="w-1/2 rounded-md outline-none p-2 bg-slate-400 text-black text-center placeholder:text-black"
        placeholder="enter password"
        name="password"
        onChange={changeHandler}
      />

      <button className=" w-[150px]  h-[50px] rounded-md bg-slate-800 text-white font-bold">
        login
      </button>

      <Link href={'/register/otp'} className="text-yellow-50 underline"> 
            login with otp
      </Link>
    </form>
  );
};

export default Login;
