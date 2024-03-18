import React from "react";

const ContactBody = ({ name, phone }) => {
  return (
    <div className="contact-details">
      <div className="contact-name">{name}</div>
      <div className="contact-phone">{phone}</div>
    </div>
  );
};

export default ContactBody;
