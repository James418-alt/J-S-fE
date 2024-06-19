"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";
import Link from "next/link";

const Page = () => {
  const [email, setEmail] = useState({ email: "" });
  const [password, setPassword] = useState({ password: "" });
  const [fname, setfName] = useState({ fName: "" });
  const [lname, setlName] = useState({ lName: "" });
  const [phone, setPhone] = useState({ phone: "" });

  const submited = async (e: any) => {
    e.preventDefault();
    const credentials = {
      Fname: fname.fName,
      Lname: lname.lName,
      email: email.email,
      phone: phone.phone,
      password: password.password,
    };

    const res = await fetch("http://localhost:8880/api/create-user", {
      body: JSON.stringify(credentials),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        Swal.fire("Registeration Successful!").then(() => {
          window.location.reload();
        });
      })
      .catch((error) => {
        console.error(error);
      });

    console.log(res);
  };

  const eChanged = (e: any) => {
    setEmail((prev) => ({ ...prev, email: e.target.value }));
  };
  const fNChanged = (e: any) => {
    setfName((prev) => ({ ...prev, fName: e.target.value }));
  };
  const lNChanged = (e: any) => {
    setlName((prev) => ({ ...prev, lName: e.target.value }));
  };
  const passChanged = (e: any) => {
    setPassword((prev) => ({ ...prev, password: e.target.value }));
  };
  const phoneChanged = (e: any) => {
    setPassword((prev) => ({ ...prev, password: e.target.value }));
  };
  return (
    <div>
      <form
        onSubmit={submited}
        className="flex justify-center items-center h-[100vh]  overflow-hidden bg-[#08546a]"
      >
        <div className="flex flex-col gap-7 p-[20px] bg-[#2b7d93] shadow-lg sha">
          <div className="flex justify-between items-center gap-3">
            <div className="flex flex-col gap-3">
              <label className="font-semibold font-sans text-[18px]">
                First Name
              </label>
              <input
                required
                className="h-10 outline-none px-1"
                onChange={fNChanged}
                name="name"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-semibold font-sans text-[18px]">
                Last Name
              </label>
              <input
                required
                className="h-10 outline-none px-1"
                onChange={lNChanged}
                name="name"
                type="text"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label className="font-semibold font-sans text-[18px]">Email</label>
            <input
              required
              className="h-10 outline-none px-1"
              onChange={eChanged}
              name="name"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="font-semibold font-sans text-[18px]">
              Phone Number
            </label>
            <input
              required
              className="h-10 outline-none px-1"
              onChange={phoneChanged}
              name="name"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-semibold font-sans text-[18px]">
              Password
            </label>
            <input
              required
              className="h-10 outline-none px-1"
              onChange={passChanged}
              name="name"
              type="text"
            />
          </div>
          <div>
            <p>
              Already have an account? <Link href="/form">login here</Link>
            </p>
          </div>
          <div className="flex justify-center">
            <button
              className="p-2 font-sans text-white bg-[#08546a] rounded-md"
              type="submit"
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Page;
