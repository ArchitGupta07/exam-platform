import React from 'react'
import "@/components/dashboard/hero-section/heroSection.css"
import Image from 'next/image'
// import heroOne from '@/assets/hero_img1.jfif'


const HeroSection = () => {
  return (
    <section className='hero-section'>
        <div className="container">

        <div className="info-side">
            <h1 className='headline'>Transform Your Knowledge into Skills</h1>
            <div className="explore-info">
              <button className='to-Exam-btn'>Give Exams</button>
              <button className='to-blog-btn'>Explore Blogs</button>
            </div>
        </div>
        <div className="image-side">
            <Image src="/hero_img2.jfif" alt='hero-image' width={600} height={400}/>
        </div>
        </div>
      
    </section>
  )
}

export default HeroSection
