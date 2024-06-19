"use client";

import React from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const Page = () => {
  const formSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submited = handleSubmit(async (req) => {
    const { email, password } = req;
    signIn("credentials", { email, password });
  });
  return (
    <div>
      <form
        onSubmit={submited}
        className="flex justify-center items-center h-[100vh]  overflow-hidden bg-[#08546a]"
      >
        <div className="flex flex-col gap-7 p-[20px] bg-[#2b7d93] shadow-lg sha">
          <div className="flex flex-col gap-3">
            <label className="font-semibold font-sans text-[18px]">Email</label>
            <input
              {...register("email")}
              required
              className="h-10 outline-none px-1"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="font-semibold font-sans text-[18px]">
              Password
            </label>
            <input
              {...register("password")}
              required
              className="h-10 outline-none px-1"
              type="text"
            />
          </div>
          <div>
            <p>
              Don't have an account?{" "}
              <Link href="/form/signinF">Register here</Link>
            </p>
          </div>
          <div className="flex justify-center">
            <button
              className="p-2 font-sans text-white bg-[#08546a] rounded-md"
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Page;
