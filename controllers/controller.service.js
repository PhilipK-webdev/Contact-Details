const db = require("../models");
const repository = require("./controller.repository");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await repository.findAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users" });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { uFullName, uPhoneNumber, uPicture, uGender, uTitle } = req.body;
    await db.User.create({
      uFullName,
      uPhoneNumber,
      uPicture,
      uGender,
      uTitle,
    });
    const _data = await repository.findAllUsers();
    res.status(200).json(_data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.editUser = async (req, res) => {
  try {
    const { id, ...data } = req.body;
    console.log("ID", id);
    const contacts = await repository.findAllUsers();
    const contactExists = contacts.some(
      (contact) => contact.uid === Number(id)
    );
    console.log("contacts", contacts);
    if (!contactExists) {
      return res.status(400).json({ message: "invalid user id" });
    }
    await db.User.update(
      {
        ...data,
      },
      {
        where: {
          uid: id,
        },
      }
    );
    const _data = await repository.findAllUsers();
    res.status(200).json(_data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.removeUser = async (req, res) => {
  try {
    const { id } = req.params;
    const _data = await repository.findAllUsers();
    const contactExists = _data.some((contact) => {
      return contact.uid === Number(id);
    });
    if (!contactExists) {
      return res.status(400).send("Id not found");
    }
    db.User.destroy({
      where: {
        uid: id,
      },
    });

    res.status(200).json({ message: "Success" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
