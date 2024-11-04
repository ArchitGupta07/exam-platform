// pages/index.tsx
import Question from "@/components/exams/question/question";
import React from "react";
// import Question from "../components/Question";

// TypeScript types for JSON data
interface QuestionData {
  question: string;
  options: string[];
  correctAnswer: string;
}

const data: { questions: QuestionData[] } = {
  questions: [
    {
      question:
        "If x and y are positive real numbers such that {{log_{x}(x² + 12) = 4}} and {{3log_{y}x = 1}}, then x + y equals",
      options: ["20", "11", "68", "10"],
      correctAnswer: "20",
    },
    {
      question:
        "The equation {{x³ + (2r + 1)x² + (4r - 1)x + 2 = 0}} has -2 as one of the roots.",
      options: ["3", "4", "5", "1"],
      correctAnswer: "1",
    },
  ],
};

const Check: React.FC = () => {
  return (
    <div>
      {data.questions.map((q, index) => (
        <div key={index} style={{ margin: "20px 0" }}>
          <h3>Question {index + 1}</h3>
          <Question questionText={q.question} />
          <div>
            {q.options.map((option, idx) => (
              <button key={idx} style={{ margin: "5px" }}>
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Check;
