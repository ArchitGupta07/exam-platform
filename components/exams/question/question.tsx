// components/Question.tsx
import React from "react";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css"; // Import KaTeX CSS for styling

// Props definition for Question component
interface QuestionProps {
  questionText: string;
}

// Helper function to parse question text and identify LaTeX equations
const parseQuestion = (question: string) => {
  // Split question string by `{{` and `}}`
  const parts = question.split(/(\{{2}.*?\}{2})/);

  return parts.map((part, index) => {
    if (part.startsWith("{{") && part.endsWith("}}")) {
      // Extract LaTeX equation and trim whitespace
      const equation = part.slice(2, -2).trim();
      return <Latex key={index}>{`$${equation}$`}</Latex>;
    } else {
      // Return normal text parts
      return <span key={index}>{part}</span>;
    }
  });
};

// Question component definition with type-checking
const Question: React.FC<QuestionProps> = ({ questionText }) => {
  return <p>{parseQuestion(questionText)}</p>;
};

export default Question;
