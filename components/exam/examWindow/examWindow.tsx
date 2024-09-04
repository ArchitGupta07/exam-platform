"use client";
import React, { useState } from "react";

import "./examWindow.css";
import { questions } from "@/data/quesData";
import Image from "next/image";
import Timer from "@/components/exam/timer/timer.jsx";

interface Answers {
  [key: number]: string;
}

const ExamWindow = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(questions[0]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [currentSection, setCurrentSection] = useState("Physics");

  const [markedQues, setMarkedQues] = useState<number[]>([]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (option: string) => {
    console.log("handleOptionSelect");
    setAnswers({
      ...answers,
      [selectedQuestion.id]: option,
    });
  };

  const handleSaveAndNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      if (!Object.keys(answers).includes(String(selectedQuestion.id))) {
        setAnswers({
          ...answers,
          [selectedQuestion.id]: "None",
        });
      }
      setSelectedQuestion(questions[currentQuestionIndex + 1]);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  const handleMarkQuestion = () => {
    if (!markedQues.includes(selectedQuestion.id)) {
      setMarkedQues([...markedQues, selectedQuestion.id]);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setSelectedQuestion(questions[currentQuestionIndex - 1]);
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <section className="exam-window">
      <div className="container">
        <div className="left">
          <div className="exam-timer">
            <Timer initialSeconds={36000} />
          </div>

          <div className="ques-tracker">
            <div className="section-wise-options">
              <button
                className={`section-option ${currentSection === "Physics" ? "active" : ""}`}
                // onClick={() => handleButtonClick("Physics")}
              >
                Physics
              </button>
              <button
                className={`section-option ${currentSection === "Chemistry" ? "active" : ""}`}
                // onClick={() => handleButtonClick("Chemistry")}
              >
                Chemistry
              </button>
              <button
                className={`section-option ${currentSection === "Maths" ? "active" : ""}`}
                // onClick={() => handleButtonClick("Maths")}
              >
                Maths
              </button>
            </div>
            <div className="ques-index">
              {questions.map((question, indx) => (
                <button
                  key={question.id}
                  style={{
                    backgroundColor: markedQues.includes(question.id)
                      ? "#3E2F5B"
                      : answers[question.id] && answers[question.id] !== "None"
                        ? "#0DAB76" // Highlight color
                        : Object.keys(answers).includes(String(question.id))
                          ? "#C75146"
                          : "#f5dc00",
                  }}
                  className={
                    currentQuestionIndex === indx
                      ? "ques-button curr-ques-btn"
                      : "ques-button"
                  }
                  onClick={() => {
                    //   console.log("current question index ", currentQuestionIndex);

                    setCurrentQuestionIndex(indx);
                    setSelectedQuestion(question);
                    if (
                      !Object.keys(answers).includes(
                        String(selectedQuestion.id)
                      )
                    ) {
                      setAnswers({
                        ...answers,
                        [selectedQuestion.id]: "None",
                      });
                    }
                  }}
                >
                  {question.id}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="right">
          <div className="ques-display">
            <h2 className="question-num">
              Question {currentQuestionIndex + 1}
            </h2>
            <p className="question">{selectedQuestion.text}</p>
            <form>
              <ul>
                {selectedQuestion.options.map((option, index) => (
                  <li key={index}>
                    <label className="square-checkbox">
                      <input
                        type="checkbox"
                        name={`question-${selectedQuestion.id}`}
                        value={option}
                        checked={
                          answers[selectedQuestion.id]?.includes(option) ||
                          false
                        }
                        onChange={() => {
                          console.log(answers);

                          return handleOptionSelect(option);
                        }}
                      />
                      <span className="option">{option}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </form>
          </div>
          <div className="track-btns">
            <button className="prev-ques-btn" onClick={handlePreviousQuestion}>
              <Image
                src="/left-arrow.png"
                alt="left-arrow"
                width={15}
                height={15}
              />
              Prev Ques
            </button>
            <button className="mark-ques-btn" onClick={handleMarkQuestion}>
              <Image src="/bulb.png" alt="bulb" width={15} height={15} />
              Mark Ques
            </button>
            <button
              className="next-ques-btn"
              onClick={handleSaveAndNextQuestion}
            >
              Save and Next Ques
              <Image
                src="/right-arrow.png"
                alt="right-arrow"
                width={15}
                height={15}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamWindow;
