module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    uid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    uFullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isOnlyLetters(value) {
          if (!/^[A-Za-z ]+$/.test(value)) {
            throw new Error("First name should only contain letters.");
          }
        },
      },
    },
    uPhoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^\d{3}-\d{3}-\d{4}$/,
      },
    },
    uPicture: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isPictureUrl: function (value) {
          if (!/^https?:\/\/.*\.(png|jpg|jpeg|gif)$/i.test(value)) {
            throw new Error("Invalid picture URL");
          }
        },
      },
    },
    uGender: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isCustomGender: function (value) {
          if (!/^((?!women|men).)*$/i.test(value)) {
            throw new Error("Invalid gender");
          }
        },
      },
    },
    uTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return User;
};
