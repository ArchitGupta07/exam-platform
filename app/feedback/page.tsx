"use client";
import React from "react";
import "@/components/feedback/feedback.scss";
import { useRouter } from "next/navigation";
const Feedback = () => {
  const router = useRouter();

  const handleFeedbackForm = () => {
    router.push("/dashboard");
  };
  return (
    <section className="feedback-section">
      <div className="container">
        <form action="" className="feedback-form">
          <h1 className="form-head">Give Feedback</h1>
          <p className="form-text">
            Thank You for Taking the Exam! Let Us Know How We Can Improve
          </p>

          <div className="feed-entry">
            <label className="comments-label" htmlFor="comments">
              Do you have any suggestions for how we can improve the exam
              experience?
            </label>
            <textarea
              className="comments-area"
              id="comments"
              name="comments"
              //   value={formData.comments}
              //   onChange={handleChange}
              required
              rows={8}
              cols={20}
            />
          </div>
          <div className="privacy-terms">
            <div className="term-one">
              <input
                type="checkbox"
                id="agree-term-one"
                name="agree-term-one"
                required
              />
              <label htmlFor="agree-term-one">
                I agree that my feedback may be used to improve future exams and
                accept the <span className="highlighter">Privacy Policy</span>.
              </label>
            </div>
            <div className="term-two">
              <input
                type="checkbox"
                id="agree-term-two"
                name="agree-term-two"
                required
              />
              <label htmlFor="agree-term-two">
                I&apos;d like to receive updates on future exams and features
              </label>
            </div>
          </div>

          <div className="form-btns">
            <button onClick={() => handleFeedbackForm()} className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Feedback;
