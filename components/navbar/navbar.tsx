"use client";

import React from "react";
import "@/components/navbar/navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const path = usePathname();
  console.log(path);
  return (
    <header className="container header">
      <div className="logo-part">
        <Image src="/logo.png" width={40} height={40} alt="logo" />
        <h2>GiveExams</h2>
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
      <div className="signin-part">
        <Link className="signin-link link" href="/signin">
          Sign In
        </Link>
        <Link className="signup-link link" href="../signup">
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
