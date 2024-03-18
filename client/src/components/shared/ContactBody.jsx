import { useNavigate } from "react-router-dom";
const ContactBody = ({ name, phone, id }) => {
  let navigate = useNavigate();
  return (
    <div className="contact-details">
      <div
        className="contact-name"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/contacts/${id}`)}
      >
        {name}
      </div>
      <div className="contact-phone">{phone}</div>
    </div>
  );
};

export default ContactBody;
