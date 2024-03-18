import React from "react";

const Image = ({ url }) => {
  return (
    <div className="contact-avatar">
      <img src={url} />
    </div>
  );
};

export default Image;
