import React from "react";
import InputField from "./inputField/inputField";

const SignUpForm = () => {
  return (
    <form className="signup-form">
      <InputField name="username" placeholder="Name" />
      <InputField name="email" placeholder="Email" type="email" />
      <InputField name="password" placeholder="Password" type="password" />
      {/* <InputField /> */}

      <button>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
