import React from "react";
import "@/components/exams/exams.scss";
import ExamCard from "@/components/dashboard/exams-section/examCard/examCard";
import { Test, testData } from "@/data/examData";

const Exams = () => {
  return (
    <section className="all-exams-section">
      <div className="container">
        <div className="available-exams">
          <h1 className="headline">Trending Exams on our Platform</h1>
          <div className="cards">
            {testData.slice(0, 3).map((test: Test, indx) => (
              <ExamCard key={indx} exam={test} />
            ))}
          </div>
        </div>
        <div className="personal-exams">
          <h1 className="headline">Latest Exams on our Platform</h1>

          <div className="cards">
            {testData.slice(0, 3).map((test: Test, indx) => (
              <ExamCard key={indx} exam={test} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exams;
