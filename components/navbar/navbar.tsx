"use client";

import React from "react";
import "@/components/navbar/navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { getSession, logout } from "@/utils/actions";
import { SessionData } from "@/utils/lib";

type NavbarProps = {
  session: SessionData;
};

const Navbar: React.FC<NavbarProps> = ({ session }) => {
  const path = usePathname();
  // console.log(path);

  return (
    <header className="container header">
      <div className="logo-part">
        <Image src="/logo.png" width={40} height={40} alt="logo" />
        <h2>GiveExams</h2>
        {session.userName}
      </div>
      <nav>
        <ul>
          <li
            className={
              path === "/dashboard"
                ? "active main-header-list"
                : "main-header-list"
            }
          >
            <Link href="/dashboard">Home</Link>
          </li>

          <li
            className={
              path === "/dashboard/exams"
                ? "active main-header-list"
                : "main-header-list"
            }
          >
            <Link href="/dashboard/exams">Exams</Link>
          </li>
          <li
            className={
              path === "/dashboard/blog"
                ? "active main-header-list"
                : "main-header-list"
            }
          >
            <Link href="/dashboard/blogs">Blogs</Link>
          </li>
          <li
            className={
              path === "/dashboard/code"
                ? "active main-header-list"
                : "main-header-list"
            }
          >
            <Link href="/dashboard/code">Code Snippets</Link>
          </li>
          <li
            className={
              path === "/dashboard/about"
                ? "active main-header-list"
                : "main-header-list"
            }
          >
            <Link href="/dashboard/about">About</Link>
          </li>
        </ul>
      </nav>

      {!session.isLoggedIn ? (
        <div className="signin-part">
          <Link className="signin-link link" href="/signin">
            Sign In
          </Link>
          <Link className="signup-link link" href="../signup">
            Sign Up
          </Link>
        </div>
      ) : (
        <div className="user-card">
          <Image
            src="/avatar.png"
            alt="profile photo"
            width={40}
            height={40}
            className="user-avatar"
          />
          <div className="user-info">
            <h1 className="user-name">Archit Gupta</h1>

            <p className="user-email">ag213@snu.edi.in</p>
          </div>
          <form action={logout}>
            <button className="logout-btn">Log Out</button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Navbar;
