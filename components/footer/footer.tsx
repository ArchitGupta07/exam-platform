import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./footer.css";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../icons/socialIcons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-icons">
          <span className="social-link">
            <InstagramIcon />
          </span>
          <span className="social-link">
            <YoutubeIcon />
          </span>
          <span className="social-link">
            <TwitterIcon />
          </span>
          <span className="social-link">
            <FacebookIcon />
          </span>
        </div>
        <div className="footer-nav-links">
          <span className="footer-link">
            <Link href="/privacy">Privacy</Link>
          </span>
          <span className="footer-link">
            <Link href="/privacy">Terms</Link>
          </span>
          <span className="footer-link">
            <Link href="/privacy">Other Projects</Link>
          </span>
          <span className="footer-link">
            <Link href="/privacy">Help Center</Link>
          </span>
        </div>
        <div className="author-info">
          <h2>&copy; giveExams.com &bull; All rights reserved</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
