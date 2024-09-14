"use client";
import React from "react";
import InputField from "./inputField/inputField";
import { login } from "@/utils/actions";
import { useFormState } from "react-dom";
import Link from "next/link";

const SignInForm = () => {
  const [state, formAction] = useFormState<any, FormData>(login, undefined);
  return (
    <form action={formAction} className="signin-form">
      <InputField placeholder="Email" type="email" name="email" />
      <InputField placeholder="Password" type="password" name="password" />
      {state?.error && <p className="wrong-cred">{state.error}</p>}

      {/* <InputField /> */}

      <Link href="/" className="forgot-pass-link">
        Forgot Your Password ?
      </Link>

      <button>Sign In</button>
    </form>
  );
};

export default SignInForm;
