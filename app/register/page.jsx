"use client";

import React from "react";

const Register = () => {
  const changeHandler = () => {};
  return (
    <form className=" flex flex-col items-center justify-center gap-7 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2">
      <input
        className="w-1/2 rounded-md outline-none p-2 bg-slate-400 text-black text-center placeholder:text-black"
        name="name"
        placeholder="enter phone"
        onChange={changeHandler}
      />

      <button className="text-yellow-200 bg-slate-800 p-5 rounded-xl">
          send otp code
      </button>
      <input
        className="w-1/2 rounded-md outline-none p-2 bg-slate-400 text-black text-center placeholder:text-black"
        placeholder="enter code"
        name="password"
        onChange={changeHandler}
      />

      <button className=" w-[150px]  h-[50px] rounded-md bg-slate-800 text-white font-bold">
        Signup
      </button>
    </form>
  );
};

export default Register;
