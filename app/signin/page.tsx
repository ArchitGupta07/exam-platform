import React from "react";

import "@/components/signin/signin.scss";

import SignInForm from "@/components/signin/signInForm";
import SignUpForm from "@/components/signin/signUpForm";
import SocialAccounts from "@/components/signin/socialAccounts";

const Login = () => {
  return (
    <section className="auth-section">
      <div className="container">
        <div className="forms">
          <div className="left-form">
            <h1 className="headline">Sign In to GiveExams</h1>
            <SocialAccounts />
            <p>Or use Your email account: </p>
            <SignInForm />
          </div>
          <div className="right-form">
            <h1 className="headline">Create Account</h1>
            <SocialAccounts />
            <p>Or use Your email for registration: </p>
            <SignUpForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
