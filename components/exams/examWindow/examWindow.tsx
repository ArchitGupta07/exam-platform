"use client";
import React, { useEffect, useState } from "react";

import "./examWindow.scss";
import { mockQuestions } from "@/data/quesData";
import Image from "next/image";
import Timer from "@/components/exams/timer/timer.jsx";
// import { useRouter } from "next/router";
import { useRouter, useSearchParams } from "next/navigation";
import Question from "../question/question";

interface Answers {
  [key: number]: string;
}

interface Question {
  id: number;
  content: string;
  options: string[];
  questionType: string;
}

const ExamWindow = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<Question>();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [currentSection, setCurrentSection] = useState("Physics");

  const [markedQues, setMarkedQues] = useState<number[]>([]);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const examId = searchParams.get("examId");

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`/api/exams?examId=${examId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch questions");
        }
        const data = await response.json();
        setQuestions(data);
        const currentQuestion = questions[currentQuestionIndex];
        // setSelectedQuestion(questions[0]);
        if (data.length > 0) {
          setSelectedQuestion(data[0]);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [examId]);

  const handleOptionSelect = (option: string) => {
    console.log("handleOptionSelect");

    if (selectedQuestion) {
      setAnswers({
        ...answers,
        [selectedQuestion.id]: option,
      });
    }
  };

  const handleSaveAndNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      if (
        selectedQuestion &&
        !Object.keys(answers).includes(String(selectedQuestion?.id))
      ) {
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
    if (selectedQuestion && !markedQues.includes(selectedQuestion.id)) {
      setMarkedQues([...markedQues, selectedQuestion.id]);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setSelectedQuestion(questions[currentQuestionIndex - 1]);
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const router = useRouter();
  const handleSubmitButton = async () => {
    // Step 1: Confirm submission
    const confirmSubmit = window.confirm(
      "Are you sure you want to submit the exam?"
    );
    if (!confirmSubmit) return;

    // Step 2: Check for unanswered questions and set "None" if necessary
    const completedAnswers = { ...answers };
    questions.forEach((question) => {
      if (!Object.keys(completedAnswers).includes(String(question.id))) {
        completedAnswers[question.id] = "None";
      }
    });

    setAnswers(completedAnswers);

    // Step 3: Send answers to server
    try {
      //   const response = await fetch(`/api/submit-exam`, {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       examId,
      //       answers: completedAnswers,
      //     }),
      //   });

      //   if (!response.ok) {
      //     throw new Error("Failed to submit exam. Please try again.");
      //   }

      // Step 4: Redirect or show success message
      alert("Exam submitted successfully!");
      router.push(`/dashboard`);
    } catch (error) {
      console.error("Error submitting exam:", error);
      alert("An error occurred while submitting. Please try again.");
    }
  };

  return (
    <section className="exam-window">
      <div className="container">
        <div className="left">
          <div className="exam-timer">
            <button className="exam-submit-btn" onClick={handleSubmitButton}>
              Submit
            </button>
          </div>
          <div className="exam-timer">
            <Timer initialSeconds={36000} />
          </div>
          <div className="ques-tracker">
            <div className="section-wise-options">
              <button
                className={`section-option ${currentSection === "Physics" ? "active" : ""}`}
                onClick={() => setCurrentSection("Physics")}
              >
                Physics
              </button>
              <button
                className={`section-option ${currentSection === "Chemistry" ? "active" : ""}`}
                onClick={() => setCurrentSection("Chemistry")}
              >
                Chemistry
              </button>
              <button
                className={`section-option ${currentSection === "Maths" ? "active" : ""}`}
                onClick={() => setCurrentSection("Maths")}
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
                        ? "#0DAB76"
                        : Object.keys(answers).includes(String(question.id))
                          ? "#C75146"
                          : "#fff",
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
                      selectedQuestion &&
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
          <div className="tracker-instructions">
            <span className="instruction-span">
              <button style={{ backgroundColor: "#3E2F5B" }}></button>
              <h1>Marked for Review</h1>
            </span>
            <span className="instruction-span">
              <button style={{ backgroundColor: "#0DAB76" }}></button>
              <h1>Answered</h1>
            </span>
            <span className="instruction-span">
              <button style={{ backgroundColor: "#C75146" }}></button>
              <h1>Not Answered</h1>
            </span>
            <span className="instruction-span">
              <button style={{ boxShadow: "inset 0 0 0 1px  #000" }}></button>
              <h1>Not Attempted</h1>
            </span>
          </div>
        </div>

        <div className="right">
          <div className="ques-display">
            <h2 className="question-num">
              Question {currentQuestionIndex + 1}
            </h2>
            {/* <p className="question">{selectedQuestion?.content}</p> */}
            <div className="question">
              <Question questionText={selectedQuestion?.content || ""} />
            </div>
            <form>
              <ul>
                {selectedQuestion?.options.map((option, index) => (
                  <li key={index}>
                    <label className="square-checkbox">
                      <input
                        type="checkbox"
                        name={`question-${selectedQuestion?.id}`}
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
