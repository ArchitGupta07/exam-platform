import React from "react";
import { FacebookIcon, GoogleIcon, LinkedInIcon } from "../icons/socialIcons";

const SocialAccounts = () => {
  return (
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
  );
};

export default SocialAccounts;
