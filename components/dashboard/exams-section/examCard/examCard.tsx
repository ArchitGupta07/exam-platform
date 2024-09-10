"use client";
import Image from "next/image";
import React, { useState } from "react";
import "./examCard.scss";
import { Test } from "@/data/examData";
import Link from "next/link";
import { ClockIcon } from "@/components/icons/socialIcons";
import Modal from "@/components/modal/modal";
import test from "node:test";

interface ExamCardProps {
  exam: Test;
}

const ExamCard: React.FC<ExamCardProps> = ({ exam }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen((prev) => !prev);
  return (
    <div className="exam-card">
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <div className="modal-content">
          <h2>Instructions</h2>
          <ol>
            <li>Read all questions carefully.</li>
            <li>You have {exam.duration} to complete the exam.</li>
            <li>Do not refresh the page during the exam.</li>
            <li>Click "Submit" once you finish the exam.</li>
          </ol>
          <Link href="/dashboard/exams/exam_id" className="start-button">
            Start Exam
          </Link>
        </div>
      </Modal>
      <div className="exam-card-img">
        <img src="/exam-card-img1.jpg" alt="" />
      </div>

      <div className="exam-details">
        <h1 className="exam-title">{exam.title}</h1>
        <p className="exam-duration">
          <ClockIcon />: {exam.duration}
        </p>
        <p className="exam-desc">{exam.description}</p>
      </div>
      <button onClick={toggleModal} className="take-exam-btn">
        Take Exam
      </button>
    </div>
  );
};

export default ExamCard;
