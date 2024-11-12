import Sidebar from "@/components/student/portal/sidebar/sidebar";
import React from "react";
import "@/components/student/portal/portal.scss";
import Analytics from "@/components/student/portal/analytics/analytics";
import LogTable from "@/components/student/portal/logTable/logtable";

const StudentPortal = () => {
  return (
    <section className="student-portal-section">
      <div className="container">
        <div className="left-side">
          <Sidebar />
        </div>
        <div className="right-side">
          <Analytics />
          <LogTable />
        </div>
      </div>
    </section>
  );
};

export default StudentPortal;
