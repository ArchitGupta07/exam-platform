import React from "react";
import "@/components/student/portal/logTable/logTable.scss";

const LogTable = () => {
  // Placeholder data for a single student's exam submissions
  const submissions = [
    {
      id: 1,
      examName: "Math Test",
      date: "2024-11-10",
      score: 85,
      status: "Submitted",
    },
    {
      id: 2,
      examName: "Science Quiz",
      date: "2024-11-15",
      score: 90,
      status: "Submitted",
    },
    {
      id: 3,
      examName: "History Exam",
      date: "2024-11-20",
      score: 78,
      status: "Pending",
    },
    {
      id: 4,
      examName: "English Test",
      date: "2024-11-25",
      score: null,
      status: "Not Submitted",
    },
    {
      id: 4,
      examName: "English Test",
      date: "2024-11-25",
      score: null,
      status: "Not Submitted",
    },
    {
      id: 4,
      examName: "English Test",
      date: "2024-11-25",
      score: null,
      status: "Not Submitted",
    },
    {
      id: 4,
      examName: "English Test",
      date: "2024-11-25",
      score: null,
      status: "Not Submitted",
    },
    {
      id: 4,
      examName: "English Test",
      date: "2024-11-25",
      score: null,
      status: "Not Submitted",
    },
    // Additional entries...
  ];

  return (
    <div className="log-table">
      <h1 className="headline">Submissions</h1>
      <table className="submission-table">
        <thead>
          <tr>
            <th>Exam Name</th>
            <th>Submission Date</th>
            <th>Score</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission) => (
            <tr key={submission.id}>
              <td>{submission.examName}</td>
              <td>{submission.date}</td>
              <td>{submission.score !== null ? submission.score : "N/A"}</td>
              <td>{submission.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogTable;
