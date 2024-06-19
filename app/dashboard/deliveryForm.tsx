"use client";
import { signIn } from "next-auth/react";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const DeliveryForm = () => {
  const formSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
    fName: yup.string().required(),
    lName: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });
  const submited = handleSubmit(async (req, e) => {
    e?.preventDefault();
    signIn("credentials", { email: req.email, password: req.password });
  });
  return (
    <div>
      <div>
        <form
          onSubmit={() => {
            submited;
          }}
        >
          <div>
            <label>First Name</label>
            <input {...register("fName")} name="fName" type="text" />
          </div>

          <div>
            <label>Last Name</label>
            <input {...register("lName")} name="lName" type="text" />
          </div>

          <div>
            <label>Email</label>
            <input {...register("email")} name="email" type="text" />
          </div>

          <div>
            <label>Phone</label>
            <input {...register("password")} name="password" type="text" />
          </div>
          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default DeliveryForm;
