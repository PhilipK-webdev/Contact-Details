const db = require("../models");

exports.findAllUsers = async () => {
  try {
    return await db.User.findAll();
  } catch (error) {
    console.error("getAllContacts - Error:", error);
    throw new Error("getAllContacts - Error");
  }
};
