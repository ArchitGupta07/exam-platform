import React from "react";
import "@/components/signin/signin.scss";
import InputField from "@/components/signin/inputField/inputField";
import {
  FacebookIcon,
  GoogleIcon,
  LinkedInIcon,
} from "@/components/icons/socialIcons";
import Link from "next/link";

const Login = () => {
  return (
    <section className="auth-section">
      <div className="container">
        <div className="forms">
          <div className="left-form">
            <h1 className="headline">Sign In to GiveExams</h1>
            <div className="social-accounts-icons">
              <span className="social-icon">
                <FacebookIcon />
              </span>
              <span className="social-icon">
                <GoogleIcon />
              </span>
              <span className="social-icon">
                <LinkedInIcon />
              </span>
            </div>
            <p>Or use Your email account: </p>
            <form className="signin-form">
              <InputField placeholder="Email" type="email" />
              <InputField placeholder="Password" type="password" />
              {/* <InputField /> */}

              <p>Forgot Your Password ?</p>

              <button>Sign In</button>
            </form>
          </div>
          <div className="right-form">
            <h1 className="headline">Create Account</h1>
            <div className="social-accounts-icons">
              <span className="social-icon">
                <FacebookIcon />
              </span>
              <span className="social-icon">
                <GoogleIcon />
              </span>
              <span className="social-icon">
                <LinkedInIcon />
              </span>
            </div>
            <p>Or use Your email for registration: </p>
            <div className="signup-form">
              <InputField placeholder="Name" />
              <InputField placeholder="Email" type="email" />
              <InputField placeholder="Password" type="password" />
              {/* <InputField /> */}

              <button>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
