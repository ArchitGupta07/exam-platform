import React from "react";
import "@/components/student/portal/analytics/analytics.scss";

const Analytics = () => {
  return (
    <div className="analytics">
      <div className="card">
        <h1>Exams Taken</h1>
        <p>5</p>
      </div>
      <div className="graph-card"></div>
    </div>
  );
};

export default Analytics;
