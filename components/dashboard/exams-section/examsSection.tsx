import React from 'react'
import "./examsSection.css";
import ExamCard from './examCard/examCard';
import { Test, testData } from '@/data/examData';

const ExamsSection = () => {
  return (
    <section className='exams-showcase-section'>

      <div className="container">

        <h1 className="headline">
            Available Exams
        </h1>

        <div className="cards-container">

      


        {testData.map((test:Test, indx)=><ExamCard key={indx} exam = {test}/>)}
        {/* <ExamCard/>
        <ExamCard/>
        <ExamCard/> */}
        </div>
        
      </div>
      
    </section>
  )
}

export default ExamsSection
