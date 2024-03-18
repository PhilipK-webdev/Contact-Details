import Icon from "./Icon";
import Image from "./Image";
import ContactBody from "./ContactBody";
const ContactCard = ({ contacts, deleteUser }) => {
  return (
    <div className="contacts-container">
      {contacts &&
        contacts.length > 0 &&
        contacts.map((contact, indexContact) => {
          return (
            <div className="contact" key={indexContact}>
              <Image url={contact.uPicture} />
              <ContactBody
                name={contact.uFullName}
                phone={contact.uPhoneNumber}
              />
              <Icon
                divClass={"contact-buttons"}
                iconClass={"fa fa-phone"}
                btn={true}
              />
              <Icon
                handleUser={() => deleteUser(contact.uid)}
                divClass={"contact-button-close"}
                iconClass={"fa fa-times"}
              />
            </div>
          );
        })}
    </div>
  );
};

export default ContactCard;
