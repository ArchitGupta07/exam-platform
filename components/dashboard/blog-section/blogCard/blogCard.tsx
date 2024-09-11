import React from "react";
import "./blogCard.scss";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style={{ fill: "rgba(0, 0, 0, 1)", transform: "none" }}
        className="svg"
      >
        <path d="M18 2H6c-1.103 0-2 .897-2 2v18l8-4.572L20 22V4c0-1.103-.897-2-2-2zm0 16.553-6-3.428-6 3.428V4h12v14.553z"></path>
      </svg>
    </div>
  );
};

export default BlogCard;