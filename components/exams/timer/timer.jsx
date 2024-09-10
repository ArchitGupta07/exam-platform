import React, { useState, useEffect } from "react";
import "./timer.css";

const Timer = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ""; // Required for modern browsers to show the confirmation dialog
    };

    if (seconds > 0) {
      const timerId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      // Add the event listener to prevent navigation
      window.addEventListener("beforeunload", handleBeforeUnload);

      // Cleanup the interval and event listener on component unmount or when timer reaches zero
      return () => {
        clearInterval(timerId);
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    } else {
      // Ensure the event listener is removed when the timer reaches zero
      window.removeEventListener("beforeunload", handleBeforeUnload);
      console.log("checl");
    }
  }, [seconds]);

  // Function to format seconds into HH:MM:SS
  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="timer">
      <h1 className="headline">Countdown Timer</h1>
      <p className="clock">{formatTime(seconds)}</p>
    </div>
  );
};

export default Timer;
