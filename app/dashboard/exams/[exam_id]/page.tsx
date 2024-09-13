import ExamWindow from "@/components/exams/examWindow/examWindow";
import React from "react";

interface ExamScreenProps {
  params: {
    exam_id: string;
  };
}

const ExamScreen: React.FC<ExamScreenProps> = ({ params }) => {
  const { exam_id } = params;

  return (
    <section className="exam-window-section">
      <ExamWindow />
    </section>
  );
};

export default ExamScreen;
