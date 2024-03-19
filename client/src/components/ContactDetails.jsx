import InputField from "./shared/InputField";
import ContactCard from "./shared/ContactCard";
import AddNewUser from "./shared/AddNewUser";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { validPhone, validTextField } from "../utils/index.js";
import { useSelector, useDispatch } from "react-redux";
import { setUserList } from "../features/user/user.js";
const ContactDetails = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const contacts = useSelector((state) => state.users.userList);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [backUpContacts, setBackUpContacts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/all");
        if (response.status === 200) {
          const data = await response.json();
          dispatch(setUserList(data));
          setFilteredContacts(data);
          setBackUpContacts(data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchData();
  }, [dispatch]);

  const handleCreateRandomUser = async () => {
    try {
      const response = await fetch(" https://randomuser.me/api/");
      if (response.status === 200) {
        const randomUserObject = await response.json();
        const userToAdd = {};
        randomUserObject.results.forEach((key) => {
          userToAdd["uFullName"] = key.name.first + " " + key.name.last;
          userToAdd["uPhoneNumber"] = validPhone(key.phone)
            ? key.phone
            : "123745-526657";
          userToAdd["uPicture"] = key.picture.large;
          userToAdd["uGender"] = key.gender;
          userToAdd["uTitle"] = key.name.title;
        });
        const options = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userToAdd),
        };
        const responseAddUser = await fetch("/api/create", options);
        if (responseAddUser.status === 200) {
          const data = await responseAddUser.json();
          dispatch(setUserList(data));
        }
      }
    } catch (error) {
      console.error("Error adding new random user:", error);
    }
  };

  const handleCreateUser = () => {
    navigate("/contacts/new");
  };
  const deleteUser = async (id) => {
    try {
      const options = {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(`/api/remove/${id}`, options);
      if (response.status === 200) {
        const filteredArray = contacts.filter(
          (contact) => contact.uid !== Number(id)
        );
        dispatch(setUserList(filteredArray));
      }
    } catch (error) {
      console.error("Error delete user:", error);
    }
  };

  const handleSearchByNameOrPhone = (e) => {
    const { value } = e.target;
    let tempNameArray = [...contacts];
    if (value) {
      if (validTextField(value)) {
        tempNameArray = filteredContacts.filter((contact) => {
          return contact.uFullName.toLowerCase().includes(value.toLowerCase());
        });
      } else if (validPhone(value)) {
        tempNameArray = filteredContacts.filter((contact) => {
          return contact.uPhoneNumber.includes(value);
        });
      }
      dispatch(setUserList(tempNameArray));
    } else {
      dispatch(setUserList(backUpContacts));
    }
  };

  return (
    <div className="contact-container">
      <InputField
        styled={"search-input"}
        name={"search"}
        placeholder={"search in contacts..."}
        handleChange={handleSearchByNameOrPhone}
      />
      <ContactCard contacts={contacts} deleteUser={deleteUser} />
      <AddNewUser
        handleCreateRandomUser={handleCreateRandomUser}
        handleCreateUser={handleCreateUser}
      />
    </div>
  );
};

export default ContactDetails;
