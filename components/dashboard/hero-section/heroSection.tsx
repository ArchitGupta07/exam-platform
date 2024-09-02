import React from 'react'
import "@/components/dashboard/hero-section/heroSection.css"
import Image from 'next/image'
// import heroOne from '@/assets/hero_img1.jfif'


const HeroSection = () => {
  return (
    <section className='hero-section'>
        <div className="container">

        <div className="info-side">
            <h1 className='headline'>Achieve More, Learn Better, Test Smarter</h1>
            <p className='sub-headline'>Manage your exams, track your progress, and access your study materials all in one place.</p>
            <div className="explore-info">
              <button className='to-Exam-btn'>Give Exams</button>
              <button className='to-blog-btn'>Explore Blogs</button>
            </div>
        </div>
        <div className="image-side">
            <Image src="/hero_image3.jpg" alt='hero-image' width={600} height={400}/>
        </div>
        </div>
      
    </section>
  )
}

export default HeroSection
