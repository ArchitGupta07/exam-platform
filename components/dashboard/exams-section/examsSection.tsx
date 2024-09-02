import React from 'react'
import "./examsSection.css";
import ExamCard from './examCard/examCard';
import { Test, testData } from '@/data/examData';

const ExamsSection = () => {
  return (
    <section className='exams-showcase-section'>
      <div className="container">

        {testData.map((test:Test)=><ExamCard exam = {test}/>)}
        {/* <ExamCard/>
        <ExamCard/>
        <ExamCard/> */}
      </div>
      
    </section>
  )
}

export default ExamsSection
