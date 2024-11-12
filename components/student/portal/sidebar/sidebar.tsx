import Image from "next/image";
import React from "react";
import "@/components/student/portal/sidebar/sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <Image
          className="profile-img"
          src="/avatar.jpg"
          alt="profile avatar image"
          width={60}
          height={60}
        />
        <div className="profile-info">
          <h1 className="profile-username">ArchitGupta01</h1>
          <h1 className="profile-email">gupta.archit01@gmail.com</h1>
        </div>
      </div>
      <button className="edit-profile-btn">Edit Profile</button>
      <div className="tools"></div>
    </div>
  );
};

export default Sidebar;
