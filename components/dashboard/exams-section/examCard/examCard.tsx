import Image from 'next/image'
import React from 'react'
import "./examCard.css";
import { Test } from '@/data/examData';


interface ExamCardProps {
    exam: Test;
}

const ExamCard: React.FC<ExamCardProps> = ({exam}) => {

    // {
    //     id: 5,
    //     title: "History and Geography Test",
    //     description: "Assess your knowledge of historical events and geographical locations from around the world.",
    //     duration: "35 minutes",
    //     totalQuestions: 50,
    //     category: "History & Geography",
    //     difficulty: "Medium",
    //     image: "https://example.com/images/history-geography-test.jpg",
    // },


  return (
    <div className='exam-card'>

        <Image src="/exam-icon.png" alt='exam icon' width={40} height={40}/>

        <h1 className='exam-title'>{exam.title}</h1>
        <p className='exam-details'>{exam.description}</p>
        <p className='exam-details'>Duration:- {exam.duration}</p>
        <button className='take-exam-btn'>Take Exam</button>

      
    </div>
  )
}

export default ExamCard
