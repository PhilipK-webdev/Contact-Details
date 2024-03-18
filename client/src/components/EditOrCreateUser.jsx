import Icon from "./shared/Icon.jsx";
import { useState } from "react";
import { generateRandom } from "../utils/index.js";
import InputField from "./shared/InputField.jsx";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { validPhone, validTextField } from "../utils/index.js";
import { useSelector, useDispatch } from "react-redux";
import { setUserList } from "../features/user/user.js";
const EditOrCreateUser = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.users.userList);
  let { id } = useParams();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [title, setTitle] = useState("");
  const [gender, setGender] = useState("");
  const [disabledAll, setDisabledAll] = useState(false);
  let navigate = useNavigate();
  useEffect(() => {
    refreshImage();
    if (id) {
      const filter = contacts.filter((contact) => contact.uid === Number(id));
      if (filter.length > 0) {
        setImage(filter[0].uPicture);
        setName(filter[0].uFullName);
        setPhoneNumber(filter[0].uPhoneNumber);
        setTitle(filter[0].uTitle);
      } else {
        setDisabledAll(true);
      }
    }
  }, [contacts, id]);

  const refreshImage = async () => {
    const { GENDER, NUMBER } = generateRandom();
    setGender(GENDER);
    setImage(`https://randomuser.me/api/portraits/${GENDER}/${NUMBER}.jpg`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "phone":
        setPhoneNumber(value);
        break;
      case "title":
        setTitle(value);
        break;
      default:
        break;
    }
  };

  const handleAddNewUser = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !phoneNumber ||
      !title ||
      !validTextField(name) ||
      !validTextField(title) ||
      !validPhone(phoneNumber)
    ) {
      console.log("missing fields");
    }

    try {
      const object = {
        uFullName: name,
        uPhoneNumber: phoneNumber,
        uTitle: title,
        uGender: gender,
        uPicture: image,
      };
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(object),
      };
      const responseAddUser = await fetch("/api/create", options);
      if (responseAddUser.status === 200) {
        const data = await responseAddUser.json();
        dispatch(setUserList(data));
        navigate("/contacts");
      }
    } catch (error) {
      console.error("Error adding new user:", error);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/contacts");
  };

  return (
    <div className="contact-container">
      <div className="new-contact-container">
        <div className="new-contact-avatar">
          <img src={image} alt="user avatar" />
          <Icon
            disabled={disabledAll}
            divClass={""}
            iconClass={"fa fa-refresh"}
            btn={true}
            handleUser={refreshImage}
          />
        </div>
        <div className="new-contact-inputs">
          <InputField
            styled={"new-contact-input"}
            label={"Name"}
            name={"name"}
            placeholder={"Enter Full Name"}
            value={name}
            handleChange={handleChange}
            disabled={disabledAll}
          />
          <InputField
            styled={"new-contact-input"}
            label={"Phone"}
            name={"phone"}
            placeholder={"Enter Phone Number"}
            value={phoneNumber}
            handleChange={handleChange}
            disabled={disabledAll}
          />
          <InputField
            styled={"new-contact-input"}
            label={"Title"}
            name={"title"}
            placeholder={"Enter title"}
            value={title}
            handleChange={handleChange}
            disabled={disabledAll}
          />
        </div>
        <div className="new-contact-buttons">
          <button
            className="button-ok"
            onClick={handleAddNewUser}
            disabled={disabledAll}
          >
            Save
          </button>
          <button
            className="button-cancel"
            onClick={handleCancel}
            disabled={disabledAll}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditOrCreateUser;
