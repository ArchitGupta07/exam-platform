import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="social-icons">
          <span className='social-link'><Link href=""><Image src="/insta.png" alt="insta logo" width={25} height={25}/></Link></span>
          <span className='social-link'><Link href=""><Image src="/yt.png" alt="youtube logo" width={25} height={25}/></Link></span>
          <span className='social-link'><Link href=""><Image src="/twitter.png" alt="twitter logo" width={25} height={25}/></Link></span>
          <span className='social-link'><Link href=""><Image src="/fb.png" alt="facebook logo" width={25} height={25}/></Link></span>

        </div>
        <div className="footer-nav-links">
          <span className='footer-link'><Link href="/privacy">Privacy</Link></span>
          <span className='footer-link'><Link href="/privacy">Terms</Link></span>
          <span className='footer-link'><Link href="/privacy">Other Projects</Link></span>
          <span className='footer-link'><Link href="/privacy">Help Center</Link></span>

        </div>
        <div className="author-info">
          <h2>&copy; giveExams.com &bull; All rights reserved</h2>
        </div>
      </div>

      
    </footer>
  )
}

export default Footer
