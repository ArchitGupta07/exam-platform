
"use client";
import React, { useState } from 'react';



import "./examWindow.css";
import { questions } from '@/data/quesData';


interface Answers {
    [key: number]: string;
  }

const ExamWindow = () => {
  // Dummy data for questions


  // State to keep track of the selected question
  const [selectedQuestion, setSelectedQuestion] = useState(questions[0]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (option:string) => {
    setAnswers({
      ...answers,
      [selectedQuestion.id]: option,
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setSelectedQuestion(questions[currentQuestionIndex + 1]);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
        setSelectedQuestion(questions[currentQuestionIndex - 1]);
        setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <section className='exam-window'>
      <div className="container">
        <div className="ques-index">
          {questions.map((question) => (
            <button
              key={question.id}
              className="ques-button"
              onClick={() => setSelectedQuestion(question)}
            >
              {question.id}
            </button>
          ))}
        </div>
        <div className="ques-display">
          <h2 className='question-num'>Question {selectedQuestion.id}</h2>
          <p className='question'>{selectedQuestion.text}</p>
          <form>
            <ul>
                {selectedQuestion.options.map((option, index) => (
                <li key={index}>
                    <label className="square-checkbox">
                    <input
                        type="checkbox"
                        name={`question-${selectedQuestion.id}`}
                        value={option}
                        checked={answers[selectedQuestion.id]?.includes(option)}
                        onChange={() => handleOptionSelect(option)}
                    />
                    <span className='option'>{option}</span>
                    </label>
                </li>
                ))}
            </ul>
            </form>

            <div className="track-btns">

                <button className='prev-ques-btn' onClick={handlePreviousQuestion}>Prev Ques</button>
                <button className='next-ques-btn' onClick={handleNextQuestion}>Save and Next Ques</button>
            </div>


        </div>
      </div>
    </section>
  );
};

export default ExamWindow;
