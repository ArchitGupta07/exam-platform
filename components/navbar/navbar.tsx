import React from 'react';
import "@/components/navbar/navbar.css"
import Link from 'next/link';

const Navbar = () => {
  return (

    <header className='container header'>
        <div className="logo-part">
            <h2>
                GiveExams
            </h2>
        </div>
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">About</Link></li>
                <li><Link href="/">Blog</Link></li>
                <li><Link href="/">Code Snippets</Link></li>
            </ul>
        </nav>
        <div className="signin-part">
            <Link className='link' href="./signin">SignIn</Link>
            <Link className='link' href="./signup">SignUp</Link>
        </div>
      
    </header>
  )
}

export default Navbar
