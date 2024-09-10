import Image from "next/image";
import React from "react";
import "./examCard.css";
import { Test } from "@/data/examData";
import Link from "next/link";

interface ExamCardProps {
  exam: Test;
}

const ExamCard: React.FC<ExamCardProps> = ({ exam }) => {
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
    <div className="exam-card">
      {/* <div className="icon-part">
        <Image src="/exam-icon.png" alt="exam icon" width={50} height={50} />

        <div className="duration">
          <Image src="/clock.png" alt="clock img" width={30} height={30} />
          <span className="exam-duration">{exam.duration}</span>
        </div>
      </div> */}
      <div className="exam-card-img">
        <img src="/exam-card-img1.jpg" alt="" />
      </div>

      <div className="exam-details">
        <h1 className="exam-title">{exam.title}</h1>
        <p className="exam-desc">{exam.description}</p>
      </div>
      {/* <p className='exam-det'>Duration:- {exam.duration}</p> */}
      <Link href="/dashboard/exams/exam_id" className="take-exam-btn">
        Take Exam
      </Link>
    </div>
  );
};

export default ExamCard;
