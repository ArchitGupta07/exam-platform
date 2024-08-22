"use client";

import React from 'react';
import "@/components/navbar/navbar.css"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {

    const path = usePathname();
    console.log(path)
  return (

    <header className='container header'>
        <div className="logo-part">
            <h2>
                GiveExams
            </h2>
        </div>
        <nav>
            <ul>
                <li  className={path==='/'? "active main-header-list" : "main-header-list" }><Link href="/">Home</Link></li>
                <li   className={path==='/about'? "active main-header-list" : "main-header-list" }><Link href="/about">About</Link></li>
                <li  className={path==='/blog'? "active main-header-list" : "main-header-list" }><Link href="/blog">Blog</Link></li>
                <li  className={path==='/code'? "active main-header-list" : "main-header-list" }><Link href="/code">Code Snippets</Link></li>
            </ul>
        </nav>
        <div className="signin-part">
            <Link className='signin-link link' href="./signin">SignIn</Link>
            <Link className='signup-link link' href="./signup">SignUp</Link>
        </div>
      
    </header>
  )
}

export default Navbar
